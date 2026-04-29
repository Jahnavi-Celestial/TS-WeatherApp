import WeatherInfoCard from "./WeatherInfoCard";

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
    <div id="hero">
      <h1 id="heading-home">Today Overview</h1>
      <div id="hero-div">
        <div id="hDiv1" className="light-div">
          <i
            className="fa-solid fa-cloud-moon"
            style={{ fontSize: "50px" }}
          ></i>
          <h2 className="temp">
            {current ? Math.round(current?.main.temp) : "32.5"}°C
          </h2>
          <p className="weather">
            {current ? current.weather[0].main : "Clouds"}
          </p>
          <hr />
          <div className="location">
            <span>
              <i
                className="fa-solid fa-location-dot"
                style={{ fontSize: "22px" }}
              ></i>
            </span>
            <p className="city">{data?.city ? `${data.city.name}` : "Delhi"}</p>
          </div>
          <div className="calender">
            <span>
              <i
                className="fa-solid fa-calendar-days"
                style={{ fontSize: "22px" }}
              ></i>
            </span>
            <p>
              <span className="date">
                {day} {month}
              </span>{" "}
              <span className="day">{weekday}</span>
            </p>
          </div>
        </div>
        <div id="hDiv2">
          {weatherCards.map((card) => (
            <WeatherInfoCard key={card.id} {...card} />
          ))}
        </div>
        <div id="hDiv3" className="light-div">
          {completeDayData.map((dayDate, i) => {
            const item = forecast?.list?.[i]; 

            const day = dayDate.toLocaleDateString("en-US", {
              weekday: "long",
            });

            const time = dayDate.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            });

            const temp = item ? `${Math.round(item.main.temp)}°C` : "32°C";

            return (
              <div className="completeDayInfo" key={i}>
                <div className="info">
                  <div>{day}</div>
                  <div>{time}</div>
                </div>
                <div>{temp}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
