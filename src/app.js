import React, { useState, useEffect } from "react";
import head from "lodash/head";
import Currencies from "./views/currencies";
import Results from "./views/results/results";
import { fetchCountries, fetchCurrencies } from "./services/currency.service";
import Navigation from "./views/navigation/navigation";

const App = () => {
  const [currency, setCurrency] = useState("");
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [rates, setRates] = useState();

  useEffect(() => {
    (async function() {
      setCountries(await fetchCountries());
    })();
  }, []);

  const getCurrencyByCountry = name =>
    head((countries.find(c => c.name === name) || {}).currencies || [{}]).code;

  const getCurrencySymbol = name =>
    head((countries.find(c => c.name === name) || {}).currencies || [{}])
      .symbol;

  const currencyProps = {
    currHandler: e => {
      setCurrency(e.target.value);
      setLoader(!isLoading);
      let curr = getCurrencyByCountry(e.target.value);
      fetchCurrencies(curr).then(res => {
        setLoader(false);
        setRates(res);
      });
    },
    currValue: currency,
    countries
  };

  const resultProps = {
    rates,
    isLoading,
    currency,
    code: getCurrencyByCountry(currency),
    symbol: getCurrencySymbol(currency)
  };
  return (
    <div className="App">
      <Navigation />
      <div className="currency">
        <Currencies {...currencyProps} />
        <Results {...resultProps} />
      </div>
    </div>
  );
};

export default App;
