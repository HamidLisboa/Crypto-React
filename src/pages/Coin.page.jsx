import React from "react";
import { useParams } from "react-router-dom";
import { detailsUrl } from "../constants/api";
import axios from "axios";
import { useState } from "react";
import CoinDetailsComponent from "../components/coins/CoinDetails.component";
import SpinnerComponent from "../components/ui/Spinner.component";

const CoinPage = () => {
  const { id } = useParams();
  const url = detailsUrl(id);
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        console.log("API Response:", response.data);
        setCoin(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError("an error occurred while fetching data");
        setLoading(false);
      });
  }, [url, id]);
  return (
    <div className="container">
      {loading ? (
        <SpinnerComponent />
      ) : error !== null ? (
        <h1>{error}</h1>
      ) : (
        <CoinDetailsComponent coin={coin} />
      )}
    </div>
  );
};

export default CoinPage;
