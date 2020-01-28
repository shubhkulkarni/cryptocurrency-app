import React, { useState, Suspense, useEffect } from "react";

import Header from "./views/header";
import Currencies from "./views/currencies";
import Results from "./views/results/results";
import { fetchRates } from "./services/conversionData";
import Loader from "./components/loader";
import axios from "axios";
import Navigation from "./views/navigation/navigation";

let conversionData = fetchRates();

const App = () => {
  const [currency, setCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [loader, setLoader] = useState(false);
  const [sendReq, setSendReq] = useState(false);
  const [rateData, setRateData] = useState();

  // useEffect(() => {
  //   if (sendReq) {
  //     let curr = currency;
  //     let crypt = cryptoCurrency;
  //     axios
  //       .get(
  //         `https://ehr9i.sse.codesandbox.io/currency-rates?fsym=${crypt}&tsyms=${curr}`
  //       )
  //       .then(res => {
  //         setRateData(Object.values(res.data)[0]);
  //         setLoader(!loader);
  //         setSendReq(false);
  //       });
  //   }
  // }, [sendReq]);

  const fetchRateData = async curr => {
    let result = await axios.get(
      `https://kpyfb.sse.codesandbox.io/currency-rates?fsyms=BTC,ETH,LTC,XRP&tsyms=${curr}`
    );

    return result;
  };

  const currencyProps = {
    currHandler: e => {
      setCurrency(e.target.value);
      setLoader(!loader);
      fetchRateData(currency).then(res => {
        setLoader(false);
        let ratesdata = Object.values(res.data);
        let rates = ratesdata.map((item, key) => item[Object.keys(item)[0]]);
        console.log(rates);
        setRateData(rates);
      });
    },
    currValue: currency,
    cryptoHandler: e => {
      setCryptoCurrency(e.target.value);
    },
    cryptoValue: cryptoCurrency,
    handleRateButton: () => {
      setLoader(!loader);
      fetchRateData(cryptoCurrency, currency);

      console.log(rateData);
    }
  };

  const resultProps = {
    rates: rateData,
    currency: currency,
    isLoading: loader
  };
  return (
    <div className="App">
      <Navigation />
      <Header />
      <div className="currency">
        <Currencies {...currencyProps} />
      </div>
      <Results {...resultProps} />
    </div>
  );
};

export default App;
