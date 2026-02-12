import React from "react";

const CoinDetailsComponent = ({ coin }) => {
  console.log(coin);
  return <div>{coin.name}</div>;
};

export default CoinDetailsComponent;
