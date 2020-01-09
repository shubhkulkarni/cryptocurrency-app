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
  const [rateData, setRateData] = useState();

  useEffect(() => {
    if (sendReq) {
      let curr = currency;
      let crypt = cryptoCurrency;
      axios
        .get(
          `https://k17db.sse.codesandbox.io/currency-rates?fsym=${crypt}&tsyms=${curr}`
        )
        .then(res => {
          setRateData(Object.values(res.data)[0]);
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
      setSendReq(true);
      console.log(rateData);

      // console.log(conversionData.rate);
      // console.log(conversionData.rate.read().data.rates);
    }
  };

  const resultProps = {
    rates: rateData,
    title: `${currency}/${cryptoCurrency}`
  };
  return (
    <div className="App">
      <Header />
      <div className="currency">
        <Currencies {...currencyProps} />
      </div>
      <Results {...resultProps} />
    </div>
  );
};

export default App;
