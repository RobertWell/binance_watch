import React from "react";
import { useBinanceSocket } from "../hooks/useBinanceSocket";
import QuerySymbol from "../Components/Home/QuerySymbol";
import AggTable from "../Components/Home/AggTable";
import PartialBookDepthTable from "../Components/Home/PartialBookDepthTable";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";
function Home() {
  const { symbolObj, changeSymbol, allSymbols, aggTrades, pbd } =
    useBinanceSocket("ETHBTC", 2);

  return (
    <div>
      <h2>Binance Watch</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <QuerySymbol
            symbol={symbolObj.symbol}
            setSymbol={changeSymbol}
            allSymbols={allSymbols.map((d) => d.symbol.toUpperCase())}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {pbd && pbd.asks ? (
            <PartialBookDepthTable pbd={pbd} symbolObj={symbolObj} />
          ) : (
            <Grid container justifyContent="center">
              <Grid item  >
                <CircularProgress color="secondary" />
              </Grid>
              <Grid item xs={12}>
                <p># Some Products have slow depth response.</p>
                <p># Please be patient or try something else!</p>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <AggTable aggTrades={aggTrades} symbolObj={symbolObj} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
