import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const CardSkeleton = () => {
  return (
    <div style={{ marginRight: "30px" }}>
      <Skeleton variant="text" height={40} animation="wave" />
      <Skeleton variant="rect" height={105} animation="wave" />
    </div>
  );
};
export default CardSkeleton;
