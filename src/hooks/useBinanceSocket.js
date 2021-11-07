import React, { useEffect, useState, useMemo } from "react";
import { getAllSymbols, getAggTrades, getPBD } from "../Composables";

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

  }
};
const updateAggTrades = (new_trade, trades, setAggTrades) => {

  trades.push(new_trade);
  trades.splice(0, 1);
  setAggTrades([...trades]);
};

const bindWs = (ws, trades, setAggTrades, setPBD) => {
  ws.onmessage = (e) => {
    let stockObj = JSON.parse(e.data);

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


  useEffect(() => {
    let ws = new WebSocket(socket_address);
    ws.onopen = () =>
      subscribe(ws, symbolObj.symbol, depth_level, id, "aggTrade", "depth");

    setWs(ws);

    getAllSymbols().then((all_symbols) => {
      setAllSymbols(all_symbols);
      changeSymbol(symbolObj.symbol, all_symbols);
    });

    getAggTrades(symbolObj.symbol).then((trades) => {
      setAggTrades(trades);
      bindWs(ws, trades, setAggTrades, setPBD);
    });

    getPBD(symbolObj.symbol).then((p) => {
      setPBD({ ...p });
    });

    return () => {
      ws.close();
      setWs(null);
    };
  }, []);

  useEffect(async () => {
    setAggTrades([]);
    getPBD(symbolObj.symbol).then((p) => {
      setPBD({ ...p });
    });
    if (ws) {
      ws.onmessage = () => {};
      if (oldSymbol)
        unsubscribe(ws, oldSymbol.symbol, depth_level, id, "aggTrade", "depth");
      subscribe(ws, symbolObj.symbol, depth_level, id, "aggTrade", "depth");
      try {
        let trades = await getAggTrades(symbolObj.symbol);
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
      if (new_symbol) setSymbolObj(new_symbol);
    }
  };

  return {
    symbolObj,
    changeSymbol,
    allSymbols,
    updateAggTrades,
    aggTrades,
    pbd,
  };
}

export { useBinanceSocket };
