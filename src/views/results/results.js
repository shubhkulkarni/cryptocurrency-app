import React from "react";
import "./results.css";
import Loader from "../../components/loader";
import MyCard from "../../components/card";

const cardProps = {
  body: "223+ from last day",
  action: "More details"
};

const Results = ({ isLoading, rates, currency }) => {
  return (
    <div className="result">
      {isLoading ? (
        <Loader />
      ) : rates ? (
        <>
          <MyCard {...cardProps} title={`Bitcoin (BTC)`} heading={rates[0]} />
          <MyCard {...cardProps} title={`Ethereum (ETH)`} heading={rates[1]} />
          <MyCard {...cardProps} title={`Litecoin (LTC)`} heading={rates[2]} />
          <MyCard {...cardProps} title={`Ripple (XRP)`} heading={rates[3]} />
        </>
      ) : null}
    </div>
  );
};
export default Results;
