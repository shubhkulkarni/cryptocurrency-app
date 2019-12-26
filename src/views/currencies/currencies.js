import React, { useState } from "react";
import "./currencies.css";
import Dropdown from "../../components/dropdown";
import Mybutton from "../../components/mybutton";

const Currencies = () => {
  const [value, setValue] = useState("");
  const changeHandler = event => {
    setValue(event.target.value);
  };

  return (
    <div className="currencies">
      <Dropdown
        changeHandler={changeHandler}
        value={value}
        label="Select currency"
      />
      <Dropdown
        changeHandler={changeHandler}
        value={value}
        label="Select cryptocurrency"
      />
      <Mybutton name="get rates" />
    </div>
  );
};

export default Currencies;
