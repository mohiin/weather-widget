
import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatheApp() {
    let [info, setInfo] = useState({
        name: "Comilla",
        feels_like: 10.94,
        humidity: 65,
        max: 12.75,
        min: 10.38,
        temp: 11.99,
        weather: "overcast clouds"
    })

    let updateInfo = (result) =>{
        setInfo(result);
    }
    return (
        <>
            <SearchBox update={updateInfo}/>
            <InfoBox info={info} />
        </>
    )
}