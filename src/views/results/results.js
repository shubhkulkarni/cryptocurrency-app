import React from "react";
import map from "lodash/map";
import Grid from "@material-ui/core/Grid";
import "./results.css";
import Loader from "../../components/loader";
import MyCard from "../../components/card";
import CardSkeleton from "../../components/card-skeleton";

const cardProps = {
  body: "223+ from last day",
  action: "More details"
};

const CURRENCY = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  LTC: "Litecoin",
  XRP: "Ripple"
};

const getRate = ({ rate, code, symbol }) =>
  symbol ? `${symbol} ${rate[code]}` : rate[code];

const getTitle = key => (CURRENCY[key] || "No Data :( ").toUpperCase();

const Results = ({ isLoading, rates, code, symbol }) => {
  return (
    <div className="result">
      {isLoading ? (
        <Loader />
      ) : rates ? (
        <Grid container>
          {map(rates, (rate, key) => (
            <Grid item xs={12} md={3} xl={3} key={key}>
              <div>
                <MyCard
                  title={getTitle(key)}
                  heading={getRate({ rate, code, symbol })}
                  {...cardProps}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
};
export default Results;
