import wrapPromise from "../utils/wrapPromise";
import axios from "axios";

export const fetchRates = () => {
  let convDataPromise = fetchConversionData();
  return { rate: wrapPromise(convDataPromise) };
};

async function fetchConversionData() {
  const users = await new Promise(res =>
    setTimeout(
      () => res(axios.get("https://jsonplaceholder.typicode.com/albums")),
      1000
    )
  );
  return users;
}
