import React, { useState, Suspense } from "react";

import Header from "./views/header";
import Currencies from "./views/currencies";
import Results from "./views/results/results";
import { fetchRates } from "./services/conversionData";
import Loader from "./components/loader";

let conversionData = fetchRates();

const App = () => {
  const [currency, setCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [loader, setLoader] = useState(false);

  const currencyProps = {
    currHandler: e => setCurrency(e.target.value),
    currValue: currency,
    cryptoHandler: e => setCryptoCurrency(e.target.value),
    cryptoValue: cryptoCurrency,
    handleRateButton: () => {
      // setLoader(!loader);
      console.log({ currency: currency, cryptoCurrency: cryptoCurrency });
      // console.log(conversionData.rate.read());
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
