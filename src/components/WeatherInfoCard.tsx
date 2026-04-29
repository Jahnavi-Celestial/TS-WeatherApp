import { Box, Typography } from '@mui/material';

interface WeatherInfoCardProps {
  icon: string;
  label: string;
  value: string;
  id: string;
}

const WeatherInfoCard = ({ icon, label, value, id }: WeatherInfoCardProps) => {
  return (
    <Box className="otherWeatherInfo light-div">
      <Box>
        <i className={icon} style={{ fontSize: "25px" }}></i>
      </Box>

      <Box>
        <Typography 
          variant="body2" 
          component="p" 
          sx={{ padding: "5px 0", fontSize: "20px"}}
        >
          {label}
        </Typography>
        
        <Typography 
          variant="h6" 
          component="h3" 
          id={id}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default WeatherInfoCard;