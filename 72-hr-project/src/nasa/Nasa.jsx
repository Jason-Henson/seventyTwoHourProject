import React, { useState, useEffect } from "react";
import NasaChild from './NasaChild';
import {
    Card,
    CardImg,
    CardBody,
    CardText
  } from "reactstrap";

const Nasa = (props) => {
  const url = `https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=fvIB5bqFzbPbnDzPGe9Epac1bd6vsQ0Fq1rYbeE1`;

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

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div>
      <h1>Hello from NASA</h1>
      <NasaChild data={results}/>
    </div>
  );
};

export default Nasa;
