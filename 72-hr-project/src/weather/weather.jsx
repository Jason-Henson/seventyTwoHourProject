import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'reactstrap'

const Weather = (props) => { 
    
    let lat = props.lat === 0 ? localStorage.getItem("setLat") : props.lat
    let lon = props.lat === 0 ? localStorage.getItem("setLon") : props.lon

    // *** Fetch ***   

    const apiKey = `03c1666c3ae04bf692763ac28385b961`;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;


    // state variables to contain fetched data
    const [temp, setTemp] = useState([]);
    const [feelsLike, setFeelsLike] = useState([]);
    const [highTemp, setHighTemp] = useState([]);
    const [lowTemp, setLowTemp] = useState([]);
    const [humidity, sethumidity] = useState([]);
    const [userLoc, setUserLoc] = useState('');

    // API endpoiont and key appended with imerial units of measurement

    const fetchWeather = async () => {
        const response = await fetch(url);
        const data = await response.json();

        setTemp(data.main.temp);        
        setFeelsLike(data.main.feels_like);
        setHighTemp(data.main.temp_max);
        setLowTemp(data.main.temp_min);
        sethumidity(data.main.humidity);
        setUserLoc(data.name);
    }  

    useEffect(() => {
        fetchWeather()
    }, [])

    // Return
    return (        
        <Container>       
            Your Locaiton: {userLoc} <br />
            Current Temp: {temp}&#8457; <br />
            Heat Index: {feelsLike}&#8457; <br />
            High Temp: {highTemp}&#8457; <br />
            Low Temp: {lowTemp}&#8457; <br />
            Humidity: {humidity}&#37; <br />
        </Container>      
    );
}
 
export default Weather;