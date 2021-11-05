import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
function Home() {
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("black");
  let lastPrice;
  // useEffect(() => {
  //   let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
  //   // ws.onopen(JSON.stringify())
  //   ws.onmessage = (e) => {
  //     let stockObj = JSON.parse(e.data);

  //     let p = parseFloat(stockObj.p).toFixed(2);
  //     setPrice(p);
  //     if (lastPrice && lastPrice !== p) {
  //       if (p > lastPrice) setColor("red");
  //       else setColor("black");
  //     } else setColor("black");
  //     lastPrice = p;
  //     console.log(stockObj, lastPrice);
  //   };

  //   return () => {
  //     ws.close("Disconnected");
  //   };
  // }, []);

  return (
    <div>
      <h2 style={{ color }}>{price}</h2>
      <Button color="primary" variant="contained">
        Hello World
      </Button>
    </div>
  );
}

export default Home;
