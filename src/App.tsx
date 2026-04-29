import Header from "./components/Header";
import Hero from "./components/Hero";
import NextForeCastSection from "./components/NextForeCastSection";
import Footer from "./components/Footer";
import { useState } from "react";
import HiddenDiv from "./components/HiddenDiv";

const App = () => {
  const [forecast, setForecast] = useState<null | object>(null);
  const [city, setCity] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  async function getForecast(city: string): Promise<void> {
    if (city == "") {
      setShowError(true);
      return;
    }
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`,
      );
      const data = await response.json();

      if(!response.ok){
        setShowError(true)
        return
      }

      setForecast(data);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header city={city} setCity={setCity} getForecast={getForecast} />
      <HiddenDiv show={showError} setShowError={setShowError} />
      <Hero forecast={forecast} />
      <NextForeCastSection forecast={forecast} />
      <Footer />
    </>
  );
};

export default App;
