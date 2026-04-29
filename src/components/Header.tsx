import { useState } from "react";

interface HeaderProps {
  city: string;
  setCity: (value: string) => void;
  getForecast: (city: string) => Promise<void>;
}

const Header = ({city,setCity,getForecast}: HeaderProps) => {
  const [isLight, setIsLight] = useState<boolean>(true);

  function handleTheme():void {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    if (isLight) {
      document.querySelectorAll(".light-div").forEach((el) => {
        el.classList.replace("light-div", "dark-div");
      });
    } else {
      document.querySelectorAll(".dark-div").forEach((el) => {
        el.classList.replace("dark-div", "light-div");
      });
    }

    setIsLight((prev) => !prev);
  }

  function handleGit():void {
    window.location.href = "https://github.com/Jahnavi-Celestial/weather-appJS";
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>):void {
    setCity(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>):void {
    if (e.key === "Enter") {
      getForecast(city);
      setCity("")
    }
  }

  return (
    <div id="header">
      <div id="logo1" className="light-div">
        <h1>
          <i className="fa-solid fa-cloud"></i>
          Weather
        </h1>
      </div>
      <div id="input-div">
        <input
          type="text"
          id="input-box"
          className="light-div"
          placeholder="Ankara"
          value={city}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div id="locationIcon" className="btn light-div" >
        <i
          className="fa-solid fa-location-crosshairs"
          style={{ fontSize: "25px" }}
        ></i>
      </div>
      <div id="theme" className="btn light-div" onClick={handleTheme}>
        {isLight ? (
          <i className="fa-regular fa-moon" style={{ fontSize: "25px" }}></i>
        ) : (
          <i className="fa-solid fa-sun" style={{ fontSize: "25px" }}></i>
        )}
      </div>
      <div id="git" className="btn" onClick={handleGit}>
        Support Project
      </div>
    </div>
  );
};

export default Header;
