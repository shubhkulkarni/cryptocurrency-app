import React from "react";
import map from "lodash/map";
import Grid from "@material-ui/core/Grid";
import "./results.css";
import MyCard from "../../components/card";
import CardSkeleton from "../../components/card-skeleton";
import commaNumber from "comma-number";
import MuiAlert from "@material-ui/lab/Alert";

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

const COLORS = [
  "#ffa726, #fb8c00",
  "#66bb6a, #43a047",
  "#ef5350, #e53935",
  "#26c6da, #00acc1"
];
const getRate = ({ rate, code, symbol }) =>
  symbol ? `${symbol} ${commaNumber(rate[code])}` : commaNumber(rate[code]);

const getTitle = key => (CURRENCY[key] || "No Data :( ").toUpperCase();

const getColor = key => COLORS[key];

const Results = ({ isLoading, rates, code, symbol }) => {
  return (
    <div className="result">
      {isLoading ? (
        // <Loader />
        <Grid container>
          {map(rates, (rate, key) => (
            <Grid item xs={12} md={3} xl={3} key={key}>
              <CardSkeleton />
            </Grid>
          ))}
        </Grid>
      ) : rates ? (
        <Grid container>
          {map(rates, (rate, key) => (
            <Grid item xs={12} md={3} xl={3} key={key}>
              <div>
                <MyCard
                  title={getTitle(key)}
                  colors={COLORS[0]}
                  heading={getRate({ rate, code, symbol })}
                  {...cardProps}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>Error</div>
      )}
    </div>
  );
};
export default Results;
