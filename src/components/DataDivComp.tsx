import { Box, Typography } from '@mui/material';

interface DataDivCompProps {
  date: Date;
  item: any;
}

const DataDivComp = ({ date, item }: DataDivCompProps) => {
  const day = date.toLocaleDateString("en-US", { weekday: "short" });

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const temp = item ? `${Math.round(item.main.temp)}°C` : "32°C";

  const weather = item ? item.weather[0].main : "cloud";

  return (
    <Box className="curDiv light-div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px"}}>
      <Box>
        <Typography variant="body2" component="p">
          {formattedDate} {day}
        </Typography>
        <Typography variant="h6" component="h4">
          {time}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <i className="fa-solid fa-cloud-moon" style={{ fontSize: "25px" }}></i>
        <Box>
          <Typography variant="h6" component="h4">
            {temp}
          </Typography>
          <Typography variant="body2" component="p">
            {weather}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DataDivComp;
