import React from 'react'

const TicketChild = (props) => {
    const mapperEvent = () => {
        return props.results.map((eventData)=> {
            return(
                <div>
                <a href={eventData.url} target="_blank" >{eventData.name}</a>
                </div>
            )
        })
        
    }
    return ( 
    <div>
        {mapperEvent()}
    </div> );
}
 
export default TicketChild;