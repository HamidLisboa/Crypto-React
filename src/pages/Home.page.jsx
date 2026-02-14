import { useState } from "react";
import React from "react";
import SpinnerComponent from "../components/ui/Spinner.component";
import { baseUrl } from "../constants/api";
import axios from "axios";
import CoinsComponent from "../components/coins/Coins.component";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    setLoading(true);

    axios
      .get(baseUrl, {
        headers: {
          Authorization: `Bearer 8828627ae5d0d74fda33dfcaf636d750e69ae5c6928cfd41526979dc46563f31`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("an error occurred while fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Wellcome to Cryto Trading Website</h1>
          <h4>A place to manage all of your trade informations and actions</h4>
          <h4>Do not forget to always using asset and risk management!!!!!</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          {loading ? (
            <SpinnerComponent />
          ) : error !== null ? (
            <h1>{error}</h1>
          ) : (
            <CoinsComponent data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
