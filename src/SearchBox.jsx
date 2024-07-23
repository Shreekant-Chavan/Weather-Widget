import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "534187bd134d2b761d3fdd5716f80274";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json(); 
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description, 
        }
        console.log(result);
    } 

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    
    return (
        <div className='SearchBox'>
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="City Name" onChange={handleChange} value={city} label="City Name" variant="outlined" /> <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            </form>
            
        </div>
    );
}