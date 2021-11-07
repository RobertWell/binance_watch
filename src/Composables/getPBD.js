import axios from "axios";
import { binanceApi } from "../api/binanceApi";
export const getPBD = async (symbol_name, fromId) => {
  try {
    let params = {
      symbol: symbol_name.toUpperCase(),
      limit: 10,
    };
    if (fromId) params.fromId = fromId;
    const res = await axios.get(binanceApi.depth(), { params });
    return res.data;
  } catch (e) {
    console.log("-----error", e);
    return [];
  }
};
