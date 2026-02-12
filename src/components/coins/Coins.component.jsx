import React from "react";
import { Link } from "react-router-dom";

const CoinsComponent = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Price USD</th>
          <th scope="col">Last 24h %</th>
          <th scope="col">Volume</th>
          <th scope="col">Market Cap</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {data.map((coin) => (
          <tr key={coin.rank}>
            <th scope="row">{coin.rank}</th>
            <td>
              <Link to={`/coin/${coin.symbol}`}>{coin.name}</Link>
            </td>
            <td>{coin.symbol}</td>
            <td>${parseFloat(coin.priceUsd).toFixed(2)}</td>
            <td>{parseFloat(coin.changePercent24Hr).toFixed(2)}%</td>
            <td>${parseFloat(coin.volumeUsd24Hr).toFixed(2)}</td>
            <td>${parseFloat(coin.marketCapUsd).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinsComponent;
