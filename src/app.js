import React, { useState, Suspense, useEffect } from "react";

import Header from "./views/header";
import Currencies from "./views/currencies";
import Results from "./views/results/results";
import { fetchRates } from "./services/conversionData";
import Loader from "./components/loader";
import axios from "axios";

let conversionData = fetchRates();

const App = () => {
  const [currency, setCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [loader, setLoader] = useState(false);
  const [sendReq, setSendReq] = useState(false);
  const [rateData, setRateData] = useState({});

  useEffect(() => {
    if (sendReq) {
      axios
        .get(
          `https://0brte.sse.codesandbox.io/currency-rates?expand=1&target=${currency}&symbols=${cryptoCurrency}`
        )
        .then(res => {
          setRateData(res);
          setSendReq(false);
        });
    }
  }, [sendReq]);
  const currencyProps = {
    currHandler: e => setCurrency(e.target.value),
    currValue: currency,
    cryptoHandler: e => setCryptoCurrency(e.target.value),
    cryptoValue: cryptoCurrency,
    handleRateButton: () => {
      // setLoader(!loader);
      console.log(
        `https://0brte.sse.codesandbox.io/currency-rates?expand=1&target=${currency}&symbols=${cryptoCurrency}`
      );
      setSendReq(true);
      // console.log(conversionData.rate);
      // console.log(conversionData.rate.read().data.rates);
      console.log(rateData);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="currency">
        <Currencies {...currencyProps} />
      </div>
      <Results />
    </div>
  );
};

export default App;
