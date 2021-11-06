import axios from "axios";

const binance_route = "https://api.binance.com/api/v3";
const binance_routes = [
  "https://api.binance.com/api/v3",
  "https://api1.binance.com/api/v3",
  "https://api2.binance.com/api/v3",
  "https://api3.binance.com/api/v3",
];

export const binanceApi = {
  exchangeInfo: () => `${binance_route}/exchangeInfo`,
  aggTrades: () => `${binance_route}/aggTrades`,
  depth:()=>`${binance_route}/depth`,
};
