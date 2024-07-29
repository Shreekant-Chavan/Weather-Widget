import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city : "Maya Nagari",
        feelslike : 26,
        humidity : 94,
        temp : 24.99,
        tempMax : 26.94,
        tempMin : 24.99,
        weather : "heavy intensity rain"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div>
            <SearchBox updatedInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}