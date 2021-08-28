import React from 'react'
import {ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";


const TicketChild = (props) => {
    const mapperEvent = () => {
        return props.results.map((eventData)=> {
            return(
                <ListGroup className="ticket-list">
                    <ListGroupItem> 
                    <a href={eventData.url} target="_blank" >{eventData.name}</a>
                    </ListGroupItem>
                </ListGroup>


                // <div>
                // <a href={eventData.url} target="_blank" >{eventData.name}</a>
                // </div>
            )
        })
        
    }
    return ( 
    <div>
        {mapperEvent()}
    </div> );
}
 
export default TicketChild;