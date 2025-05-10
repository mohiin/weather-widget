
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ update }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    const url = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    
    let getWeatherInfo = async () => {
        try {
            let respoonse = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
            let jsonRes = await respoonse.json();
            let result = {
                temp: jsonRes.main.temp,
                humidity: jsonRes.main.humidity,
                min: jsonRes.main.temp_min,
                max: jsonRes.main.temp_max,
                feels_like: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
                name: jsonRes.name,
            }
            return result;
        } catch (er) {
            throw er;
        }
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            setErr(false);
            let newInfo = await getWeatherInfo();
            update(newInfo);
        } catch (er) {
            setErr(true);
        }

    }



    return (
        <div className="SearchBox">
            <h1>Weather Widget</h1>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /> <br />
                <Button variant="outlined" type="submit">Search</Button>
            </form>
            {err && <p style={{ color: "red" }}>This place doesn't exits! in our API</p>}
        </div>
    )
}
