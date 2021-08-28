import './App.css';
import Tickets from './tickets/Tickets';
import Nasa from './nasa/Nasa';
import Weather from './weather/weather';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";


function App() {
  const [lon, setLon] = useState(0)
  const [lat, setLat] = useState(0)

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      localStorage.setItem("setLat", position.coords.latitude)
      localStorage.setItem("setLon", position.coords.longitude)
      console.log(lat);
      console.log(lon)
    })
  }

  useEffect(() => {
    getLoc()
  }, [])

  return (
    <Container>
      <Row>
        <Col className="weather-col">
          <Weather lat={lat} lon={lon} />
        </Col>
      </Row>
      <Row>
        <Col className="nasa-col">
          <Nasa lon={lon} lat={lat} />
        </Col>
        <Col className="ticket-col">
          <Tickets lon={lon} lat={lat} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;