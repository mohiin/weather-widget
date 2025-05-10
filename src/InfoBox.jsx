
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function ({info}) {
    const hot_url = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=";
    const cold_url = "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2022/09/cold_weather_GettyImages107191741_Thumb.jpg";
    const rain_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqDOlKyyyH_R72pnYWokauTXqhVBrhtATqw&s";
     
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rain_url : info.temp > 20 ? hot_url : cold_url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.name} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp>20 ? <WbSunnyIcon/> : <AcUnitIcon/> }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min temp = {info.min}&deg;C</p>
                            <p>Max temp = {info.max}&deg;C</p>
                            <p>Weather can be describe as <b>{info.weather}</b> and feels like {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}