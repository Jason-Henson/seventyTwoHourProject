import './App.css';
// import Weather from './weather/weather';
// import Nasa from './nasa/Nasa';
import Tickets from './tickets/Tickets';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css' 

function App() {
  const [lon, setLon] = useState(0)
  const [lat, setLat] = useState(0)
  
  const getLoc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      localStorage.setItem("setLat",position.coords.latitude)
      localStorage.setItem("setLon",position.coords.longitude)
      console.log(lat);
      console.log(lon)
    })
  }

  useEffect(() => {
    getLoc()
  }, [])
  
  return (
    <div>
      {/* <Nasa /> */}
      <Tickets lon={lon} lat={lat} />
      {/* <Weather /> */}
    </div>
  );
}

export default App;
