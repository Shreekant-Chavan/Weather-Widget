import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"

export default function SearchBox() {
    let [city, setCity] = useState("");

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
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