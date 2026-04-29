import CloudIcon from '@mui/icons-material/Cloud';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    function handleClick(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

  return (
    <Box id="footerDiv" component="footer" sx={{width: "100%", height: "auto", padding: "30px 90px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Box className="light-div" sx={{ display: 'flex', alignItems: 'center', padding: "18px" }}>
        <CloudIcon sx={{ mr: 1 }} />
        <Typography variant="h4" component="h1" sx={{fontSize: "20px", fontWeight: "50"}}>
          Weather
        </Typography>
      </Box>

      <Box id="footerText" className="light-div">
        <Typography variant="body2">
          Weather data provided by OpenWeatherMap
        </Typography>
      </Box>

      <Box 
        // id="scrollToTop" 
        sx={{padding: "10px 20px", fontSize: "28px", textAlign: "center", cursor: "pointer"}}
        className="light-div" 
        onClick={handleClick}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </Box>
    </Box>
  )
}

export default Footer
