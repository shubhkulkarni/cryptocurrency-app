import request from "../utils/request";
import { apiBaseUrl } from "../constants/urls";

export const fetchCurrencies = params =>
  request.get(
    `${apiBaseUrl}/currency-rates?fsyms=BTC,ETH,LTC,XRP&tsyms=${params}`
  );

export const fetchCountries = () => request.get(`${apiBaseUrl}/countries`);
