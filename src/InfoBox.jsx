import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox() {


    const INIT_URL = "https://images.unsplash.com/photo-1696671648700-07cf7f5a0d87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let info = {
        city : "Mumbai",
        feelslike : 26,
        humidity : 94,
        temp : 24.99,
        tempMax : 26.94,
        tempMin : 24.99,
        weather : "heavy intensity rain"
    }

    console.log(info);

    return(
    <div className="InfoBox">
        <h2>Weather Info - {info.weather}</h2>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Tempreture = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Maximum Temprature = {info.tempMax}&deg;C</div>
          <div>Minimum Temprature = {info.tempMin}&deg;C</div>
          <div>Feels like = {info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
}