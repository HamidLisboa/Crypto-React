import React from "react";

const CoinDetailsComponent = ({ coin }) => {
  if (!coin.id) {
    return <div>No coin data available</div>;
  }
  return (
    <div className="container">
      <div className="row my-2 p-3 rounded">
        <h2>
          Last Updated Information About {coin.name}({coin.symbol})
        </h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Change Percent in Last 24 Hours</div>
        <div className="col-12 col-md-6">
          <span
            className={`badge ${coin.changePercent24Hr > 0 ? "bg-success" : "bg-danger"}`}
          >
            {parseFloat(coin.changePercent24Hr).toFixed(2)}%
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Price in USD</div>
        <div className="col-12 col-md-6">
          ${parseFloat(coin.priceUsd).toFixed(2)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Volume in Last 24 Hours</div>
        <div className="col-12 col-md-6">
          ${parseFloat(coin.volumeUsd24Hr).toFixed(2)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Market Cap</div>
        <div className="col-12 col-md-6">
          ${parseFloat(coin.marketCapUsd).toFixed(2)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Supply</div>
        <div className="col-12 col-md-6">
          {parseFloat(coin.supply).toFixed(2)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Max Supply</div>
        <div className="col-12 col-md-6">
          {coin.maxSupply ? parseFloat(coin.maxSupply).toFixed(2) : "N/A"}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Rank</div>
        <div className="col-12 col-md-6">{coin.rank}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">VWAP in Last 24 Hours</div>
        <div className="col-12 col-md-6">
          ${parseFloat(coin.vwap24Hr).toFixed(2)}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Explorer</div>
        <div className="col-12 col-md-6">
          <a href={coin.explorer} target="_blank" rel="noopener noreferrer">
            {coin.explorer}
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">ID</div>
        <div className="col-12 col-md-6">{coin.id}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Symbol</div>
        <div className="col-12 col-md-6">{coin.symbol}</div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">Name</div>
        <div className="col-12 col-md-6">{coin.name}</div>
      </div>
    </div>
  );
};

export default CoinDetailsComponent;
