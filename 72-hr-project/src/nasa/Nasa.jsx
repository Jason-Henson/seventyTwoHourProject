import React, { useState, useEffect } from "react";
import NasaChild from "./NasaChild";

const Nasa = (props) => {
  let lat = props.lat === 0 ? localStorage.getItem("setLat") : props.lat;
  let lon = props.lat === 0 ? localStorage.getItem("setLon") : props.lon;
  const d = new Date();

  const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${d.getFullYear()}-${
    d.getMonth() + 1
  }-${d.getDate()}&&dim=0.10&api_key=fvIB5bqFzbPbnDzPGe9Epac1bd6vsQ0Fq1rYbeE1`;

  const [results, setResults] = useState([]);

  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.url);
    setResults(data.url);
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div>
      <NasaChild data={results} />
    </div>
  );
};

export default Nasa;
