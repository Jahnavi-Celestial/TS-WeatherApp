import { Box } from "@mui/material";

interface DayForecastCardProps {
  day: string;
  time: string;
  temp: string;
  index: number;
}

const DayForecastCard = ({ day, time, temp, index }: DayForecastCardProps) => {
  return (
    <Box>
      <Box>
        <Box id={`day-${index}`}>{day}</Box>
        <Box id={`date-${index}`}>{time}</Box>
      </Box>
      <Box id={`curTemp-${index}`}>{temp}</Box>
    </Box>
  );
};

export default DayForecastCard;