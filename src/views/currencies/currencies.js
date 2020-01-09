import React, { useState } from "react";
import "./currencies.css";
import Dropdown from "../../components/dropdown";
import Mybutton from "../../components/mybutton";
import { targetCurrencies } from "../../constants/currencies";

const Currencies = props => {
  const {
    currValue,
    cryptoValue,
    currHandler,
    cryptoHandler,
    handleRateButton
  } = props;

  const currencyMenu = ["USD", "INR", "GBP", "JPY"];
  const cryptoMenu = ["BTC", "ETH", "LTC", "XRP"];

  return (
    <div className="currencies">
      <Dropdown
        changeHandler={currHandler}
        value={currValue}
        items={targetCurrencies}
        label="Select currency"
      />
      <Dropdown
        changeHandler={cryptoHandler}
        value={cryptoValue}
        items={cryptoMenu}
        label="Select cryptocurrency"
      />
      <br />
      <br />
      <Mybutton onClick={handleRateButton} name="get rates" />
    </div>
  );
};

export default Currencies;
