import React from "react";
import "./results.css";
import Loader from "../../components/loader";
import MyCard from "../../components/card";

const cardProps = {
  title: "USD/Bitcoin",
  heading: "1350.6",
  body: "223+ from last day",
  action: "More details"
};

const Results = ({ isLoading }) => {
  return (
    <div className="result">
      {isLoading ? <Loader /> : <MyCard {...cardProps} />}
    </div>
  );
};
export default Results;
