import React from "react";
import "./results.css";
import Loader from "../../components/loader";

const Results = ({ isLoading }) => {
  return (
    <div>
      <Loader isLoading={isLoading} />
    </div>
  );
};
export default Results;
