import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const CardSkeleton = () => {
  return (
    <div style={{ marginRight: "30px" }}>
      <Skeleton variant="text" animation="pulse" />
      <Skeleton
        variant="circle"
        style={{ minHeight: "50px" }}
        animation="pulse"
      />
      <Skeleton variant="rect" animation="pulse" />
    </div>
  );
};
export default CardSkeleton;
