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

      <br />
      <br />
    </div>
  );
};

export default Currencies;
