import React, { useState } from "react";
import "./currencies.css";
import Dropdown from "../../components/dropdown";
import Mybutton from "../../components/mybutton";

const Currencies = ({
  currValue,
  cryptoValue,
  currHandler,
  cryptoHandler,
  handleRateButton
}) => {
  const [value, setValue] = useState("");
  const changeHandler = event => {
    setValue(event.target.value);
  };

  const currencyMenu = ["USD", "INR", "GBP", "JPY"];
  const cryptoMenu = ["Bitcoin", "Ethereum"];

  return (
    <div className="currencies">
      <Dropdown
        changeHandler={currHandler}
        value={currValue}
        items={currencyMenu}
        label="Select currency"
      />
      <Dropdown
        changeHandler={cryptoHandler}
        value={cryptoValue}
        items={cryptoMenu}
        label="Select cryptocurrency"
      />
      <Mybutton onClick={handleRateButton} name="get rates" />
    </div>
  );
};

export default Currencies;
