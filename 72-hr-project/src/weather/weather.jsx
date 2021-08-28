import './weather.css'
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button } from 'reactstrap'

const Weather = (props) => { 

    const [toggleHawk, settoggleHawk] = useState(true);
    const [tempSymbol, settempSymbol] = useState('F');

    
    let lat = props.lat === 0 ? localStorage.getItem("setLat") : props.lat
    let lon = props.lat === 0 ? localStorage.getItem("setLon") : props.lon

    // *** Fetch ***   
    const [units, setUnits] = useState('&units=imperial');
    const apiKey = `03c1666c3ae04bf692763ac28385b961`;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}${units}`;

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

        // API endpoiont and key appended with imerial units of measurement
    

    let toggle = () => {
        if (toggleHawk !== true){
            setUnits('&units=metric');
            fetchWeather();
            settoggleHawk(true);            
        } else {
            setUnits('&units=imperial');
            fetchWeather();
            settoggleHawk(false);
            settempSymbol('F');
        }

        if(units === '&units=metric') {
            settempSymbol('C');
        } 

        if(units === '&units=imperial'){
            settempSymbol('F');
        }
        
    }

    // Return
    return (        
        <Container>                
            Your Locaiton: {userLoc} <br />
            Current Temp: {temp} {tempSymbol} <br />
            Heat Index: {feelsLike} {tempSymbol} <br />
            High Temp: {highTemp} {tempSymbol} <br />
            Low Temp: {lowTemp} {tempSymbol} <br />
            Humidity: {humidity} {tempSymbol} <br />
            <Button onClick={toggle}>Toggle C/F</Button>
        </Container>      
    );
}
 
export default Weather;