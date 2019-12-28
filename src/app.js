import React, { useState } from "react";

import Header from "./views/header";
import Currencies from "./views/currencies";

const App = () => {
  const [currency, setCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");

  const currencyProps = {
    currHandler: e => setCurrency(e.target.value),
    currValue: currency,
    cryptoHandler: e => setCurrency(e.target.value),
    cryptoValue: cryptoCurrency
  };

  return (
    <div className="App">
      <Header />

      <Currencies {...currencyProps} />
    </div>
  );
};

export default App;
