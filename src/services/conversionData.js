import wrapPromise from "../utils/wrapPromise";
import axios from "axios";
import { apiBaseUrl } from "../constants/urls";

export const fetchRates = () => {
  let convDataPromise = fetchConversionData();
  return { rate: wrapPromise(convDataPromise) };
};

async function fetchConversionData() {
  const users = await new Promise(res =>
    setTimeout(() => res(axios.get(apiBaseUrl)), 1000)
  );
  return users;
}
