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
          <MyCard {...cardProps} title={`${currency}/BTC`} heading={rates[0]} />
          <MyCard {...cardProps} title={`${currency}/ETH`} heading={rates[1]} />
          <MyCard {...cardProps} title={`${currency}/LTC`} heading={rates[2]} />
          <MyCard {...cardProps} title={`${currency}/XRP`} heading={rates[3]} />
        </>
      ) : null}
    </div>
  );
};
export default Results;
