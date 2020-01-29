import React, { useState, useEffect } from "react";
import map from "lodash/map";
import head from "lodash/head";
import Currencies from "./views/currencies";
import Results from "./views/results/results";
import Loader from "./components/loader";
import { fetchCountries, fetchCurrencies } from "./services/currency.service";
import Navigation from "./views/navigation/navigation";

const App = () => {
  const [currency, setCurrency] = useState("");
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [rateData, setRateData] = useState();

  useEffect(() => {
    (async function() {
      setCountries(await fetchCountries());
    })();
  }, []);

  const getCurrencyByCountry = name =>
    head((countries.find(c => c.name === name) || {}).currencies || {}).code;

  const currencyProps = {
    currHandler: e => {
      setCurrency(e.target.value);
      setLoader(!loader);
      let curr = getCurrencyByCountry(e.target.value);
      fetchCurrencies(curr).then(res => {
        setLoader(false);
        let rates = map(res, (item, key) => item[Object.keys(item)[0]]);
        setRateData(rates);
      });
    },
    currValue: currency,
    countries
  };

  const resultProps = {
    rates: rateData,
    currency: currency,
    isLoading: loader
  };
  return (
    <div className="App">
      {/* <Navigation /> */}
      <div className="currency">
        <Currencies {...currencyProps} />
      </div>
      <Results {...resultProps} />
    </div>
  );
};

export default App;
