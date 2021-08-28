import React, { useEffect, useState } from "react";
import TicketChild from "./TicketChild";
import {ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";

const Tickets = (props) => {
  let lat = props.lat === 0 ? localStorage.getItem("setLat") : props.lat;
  let lon = props.lat === 0 ? localStorage.getItem("setLon") : props.lon;

  const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json?";
  const key = "e0B7qrUmgY7BGzIrVXCAnQ5wGirqv3dA";
  let url = `${baseURL}latlong=${lat.toString()},${lon.toString()}&apikey=${key}`;

  const [eventResults, setEventResults] = useState([]);

  const ticketUrl = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data._embedded.events);
    setEventResults(data._embedded.events);
  };

  useEffect(() => {
    ticketUrl();
  }, []);

  return (




    <Container className="ticket-container">
      <Row>
        <div>
          <h1>Here are some events in your area!</h1>

          <TicketChild results={eventResults} />
        </div>
      </Row>
    </Container>
  );
};

export default Tickets;
