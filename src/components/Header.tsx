import { useState } from "react";

import { Box, Typography, TextField, Button } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun
import GitHubIcon from '@mui/icons-material/GitHub';

interface HeaderProps {
  city: string;
  setCity: (value: string) => void;
  getForecast: (city: string) => Promise<void>;
}

const Header = ({city,setCity,getForecast}: HeaderProps) => {
  const [isLight, setIsLight] = useState<boolean>(true);

  function handleTheme():void {
    const newMode = !isLight;
    document.body.className = newMode ? "light" : "dark";
    setIsLight(newMode);
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
    <Box id="header" sx={{ display: 'flex', alignItems: 'center', width: "100%", height: "auto", padding: "50px 80px", justifyContent: "space-between" }}>
      
      <Box className="light-div" sx={{ display: 'flex', alignItems: 'center', padding: "18px" }}>
        <CloudIcon sx={{ mr: 1 }} />
        <Typography variant="h4" component="h1" sx={{fontSize: "20px", fontWeight: "50"}}>
          Weather
        </Typography>
      </Box>

      <Box sx={{minWidth: "40%", textAlign: "center"}} className="light-div">
        <TextField
          sx={{minWidth: "100%", border: "none", fontSize: "1.5rem"}}
          placeholder="Ankara"
          variant="outlined"
          value={city}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
      </Box>

      <Box 
        sx={{textAlign: "center", padding: "15px", borderRadius: "5px", cursor: "pointer"}}
        className="light-div"
      >
        <LocationSearchingIcon sx={{ fontSize: "25px" }} />
      </Box>

      <Box 
        sx={{textAlign: "center", padding: "15px", borderRadius: "5px", cursor: "pointer"}}
        className="light-div" 
        onClick={handleTheme}
      >
        {isLight ? <Brightness4Icon sx={{ fontSize: "25px" }} /> : <Brightness7Icon sx={{ fontSize: "25px" }} />}
      </Box>

      <Button 
        id="git"
        sx={{textAlign: "center",  padding: "15px", borderRadius: "5px", cursor: "pointer", backgroundColor: "black", color: "white", fontSize: "1rem"}}
        variant="contained"
        startIcon={<GitHubIcon />}
        onClick={handleGit}
      >
        Support Project
      </Button>

    </Box>
  );
};

export default Header;
