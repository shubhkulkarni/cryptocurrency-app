import React from "react";
import "./results.css";
import Loader from "../../components/loader";
import MyCard from "../../components/card";

const cardProps = {
  body: "223+ from last day",
  action: "More details"
};

const Results = ({ isLoading, rates, title }) => {
  return (
    <div className="result">
      {rates ? (
        <MyCard {...cardProps} title={title} heading={rates} />
      ) : (
        <MyCard {...cardProps} title={title} heading={<Loader />} />
      )}
    </div>
  );
};
export default Results;
