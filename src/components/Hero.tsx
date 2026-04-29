import WeatherInfoCard from "./WeatherInfoCard";
import { Box, Typography, Divider } from '@mui/material';

interface HeroProps<T>{
  forecast: T | null;
}

const Hero = ({ forecast }: HeroProps<any>) => {

  const data = forecast;
  const current = data?.list?.[0];

  const weatherCards = [
    {
      icon: "fa-solid fa-wind",
      label: "Wind Speed",
      value: current ? `${current.wind?.speed} km/h` : "2.73 km/h",
      id: "speed",
    },
    {
      icon: "fa-solid fa-droplet",
      label: "Humidity",
      value: current ? `${current.main.humidity} %` : "28 %",
      id: "humidity",
    },
    {
      icon: "fa-solid fa-gauge-simple-high",
      label: "Pressure",
      value: current ? `${current.main.pressure} hPa` : "1012 hPa",
      id: "pressure",
    },
    {
      icon: "fa-solid fa-eye",
      label: "Visibility",
      value: current ? `${(current.visibility / 1000).toFixed(1)} km` : "10 km",
      id: "visibility",
    },
    {
      icon: "fa-solid fa-sun",
      label: "Sunrise",
      value: data?.city?.sunrise
        ? new Date(data.city.sunrise * 1000).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "05:15",
      id: "sunrise",
    },
    {
      icon: "fa-solid fa-rainbow",
      label: "Sunset",
      value: data?.city?.sunset
        ? new Date(data.city.sunset * 1000).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "18:35",
      id: "sunset",
    },
  ];

  const completeDayData = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setHours(date.getHours() + i * 3);
    completeDayData.push(date);
    // console.log(date)
  }

  const curDate: Date = new Date();
  const day: number = curDate.getDate();
  const month: string = curDate.toLocaleDateString("en-US", { month: "long" });
  const weekday: string = curDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <Box id="hero" sx={{width: "100%", padding: "50px 90px"}}>
      <Typography variant="h4" component="h1" sx={{paddingBottom: "30px", fontWeight: "400"}}>
        Today Overview
      </Typography>

      <Box id="hero-div" sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px"}}>
        
        <Box id="hDiv1" className="light-div" sx={{width: "25%", minHeight: "418px", padding: "40px", border: "1px solid black", display: "flex", flexDirection: "column", justifyContent: "space-around", fontSize: "large"}}>

          <i className="fa-solid fa-cloud-moon" style={{ fontSize: "50px" }}></i>
          
          <Typography variant="h2" component="h2">
            {current ? Math.round(current?.main.temp) : "32.5"}°C
          </Typography>

          <Typography variant="body1">
            {current ? current.weather[0].main : "Clouds"}
          </Typography>

          <Divider sx={{ my: 1, borderColor: 'inherit' }} />

          <Box sx={{display: "flex", alignItems: "center", gap: "15px"}}>
            <span>
              <i className="fa-solid fa-location-dot" style={{ fontSize: "22px" }}></i>
            </span>
            <Typography component="p" className="city">
              {data?.city ? `${data.city.name}` : "Delhi"}
            </Typography>
          </Box>

          <Box sx={{display: "flex", alignItems: "center", gap: "15px"}}>
            <span>
              <i className="fa-solid fa-calendar-days" style={{ fontSize: "22px" }}></i>
            </span>
            <Typography component="p">
              <span className="date">{day} {month}</span>
              <br></br>
              <span className="day">{weekday}</span>
            </Typography>
          </Box>
        </Box>

        
        <Box id="hDiv2" sx={{width: "50%", minHeight: "418px", height: "auto", display: "grid", gridTemplateColumns: "repeat(2, auto)",gap: "10px"}}>
          {weatherCards.map((card) => (
            <WeatherInfoCard key={card.id} {...card} />
          ))}
        </Box>

        <Box id="hDiv3" className="light-div" sx={{width: "25%", minHeight: "400px", padding: "10px"}}>
          {completeDayData.map((dayDate, i) => {
            const item = forecast?.list?.[i];
            const dayName = dayDate.toLocaleDateString("en-US", { weekday: "long" });
            const time = dayDate.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });
            const temp = item ? `${Math.round(item.main.temp)}°C` : "32°C";

            return (
              <Box key={i} sx={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px"}}>
                <Box className="info">
                  <Box component="div">{dayName}</Box>
                  <Box component="div">{time}</Box>
                </Box>
                <Box component="div">{temp}</Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
