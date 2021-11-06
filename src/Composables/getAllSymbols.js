import { binanceApi } from "../api/binanceApi";
import axios from "axios";

const getAllSymbols = async () => {
  try {
    const res = await axios.get(binanceApi.exchangeInfo());
    // let temp = [];
    // for (let s of res.data.symbols) {
    // //   if (s.isMarginTradingAllowed) temp.push(s.symbol);
    //   temp.push(s.symbol);
    // }
    // // console.log(res.data.symbols);
    
    return res.data.symbols;
  } catch (e) {
    console.log("------error", e);
    return [];
  }
};

export { getAllSymbols };
