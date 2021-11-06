import React, { useEffect, useState, useMemo } from "react";
import { getAllSymbols, getAggTrades } from "../Composables";

let oldSymbol;
let socket_address = "wss://stream.binance.com:9443/ws/etheur@trade";

const unsubscribe = (ws, s, depth_level, id, ...streamNames) => {
  let symbol_name = s.toLowerCase();
  if (ws) {
    let params = streamNames.map((streamName) => {
      if (streamName === "depth")
        return `${symbol_name}@${streamName}${depth_level}`;
      else return `${symbol_name}@${streamName}`;
    });

    let msg = {
      method: "UNSUBSCRIBE",
      params,
      id,
    };

    ws.send(JSON.stringify(msg));
  }
};

const subscribe = (ws, s, depth_level, id, ...streamNames) => {
  let symbol_name = s.toLowerCase();
  if (ws) {
    let params = streamNames.map((streamName) => {
      if (streamName === "depth")
        return `${symbol_name}@${streamName}${depth_level}`;
      else return `${symbol_name}@${streamName}`;
    });
    let msg = {
      method: "SUBSCRIBE",
      params,
      id,
    };
    ws.send(JSON.stringify(msg));
    // console.log(msg);
  }
};
const updateAggTrades = (new_trade, trades, setAggTrades) => {
  // console.log(new_trade, trades);
  trades.push(new_trade);
  trades.splice(0, 1);
  setAggTrades([...trades]);
};

const bindWs = (ws, trades, setAggTrades, setPBD) => {
  ws.onmessage = (e) => {
    let stockObj = JSON.parse(e.data);
    // setWs(ws);
    // console.log(stockObj);
    if (stockObj.e === "aggTrade") {
      updateAggTrades(stockObj, trades, setAggTrades);
    } else if ("asks" in stockObj && "bids" in stockObj) {
      setPBD({ ...stockObj });
    }
  };
};

function useBinanceSocket(defaultSymbol, id = 1, depth_level = 10) {
  const [ws, setWs] = useState(null);
  const [symbolObj, setSymbolObj] = useState({ symbol: defaultSymbol });
  const [allSymbols, setAllSymbols] = useState([]);
  const [aggTrades, setAggTrades] = useState([]);
  const [pbd, setPBD] = useState({});

//   const loading = useMemo(() => {
//     return aggTrades.length && allSymbols.length;
//   }, [aggTrades, allSymbols]);

  const getInitialAggTrades = async () => {
    return await getAggTrades(symbolObj.symbol);
  };

  useEffect(() => {
    let ws = new WebSocket(socket_address);
    ws.onopen = () =>
      subscribe(ws, symbolObj.symbol, depth_level, id, "aggTrade", "depth");

    setWs(ws);

    getAllSymbols().then((all_symbols) => {
      setAllSymbols(all_symbols);
      changeSymbol(symbolObj.symbol, all_symbols);
    });

    getInitialAggTrades().then((trades) => {
      setAggTrades(trades);
      bindWs(ws, trades, setAggTrades, setPBD);
    });

    return () => {
      ws.close();
      setWs(null);
    };
  }, []);

  useEffect(async () => {
    setAggTrades([]);
    setPBD({})
    if (ws) {
      ws.onmessage = () => {};
      if (oldSymbol)
        unsubscribe(ws, oldSymbol.symbol, depth_level, id, "aggTrade", "depth");
      subscribe(ws, symbolObj.symbol, depth_level, id, "aggTrade", "depth");
      try {
        let trades = await getInitialAggTrades();
        setAggTrades(trades);
        bindWs(ws, trades, setAggTrades, setPBD);
      } catch (e) {
        console.log("------error", e);
      }

    }
  }, [symbolObj.symbol]);

  const changeSymbol = (new_symbol_name, source) => {
    if (new_symbol_name) {
      oldSymbol = symbolObj;
      let new_symbol;
      if (source) {
        new_symbol = source.find(
          (s) => s.symbol === new_symbol_name.toUpperCase()
        );
      } else
        new_symbol = allSymbols.find(
          (s) => s.symbol === new_symbol_name.toUpperCase()
        );
      //   console.log("F------new_symbol", new_symbol, allSymbols);
      if (new_symbol) setSymbolObj(new_symbol);
    }
  };

  return {
    symbolObj,
    changeSymbol,
    allSymbols,
    // loading,
    updateAggTrades,
    aggTrades,
    pbd
  };
}

export { useBinanceSocket };
