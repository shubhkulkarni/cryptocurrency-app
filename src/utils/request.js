import axios from "axios";
//import { env } from "../constants/constants";

const _getData = request => (...params) =>
  request(...params).then(res => res.data);
const request = {
  get: _getData(axios.get)
};

export default request;
