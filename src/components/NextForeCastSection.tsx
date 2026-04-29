import { useState } from "react";
import DataDivComp from "./DataDivComp";
import DateBtn from "./DateBtn";
import { Box, Typography } from '@mui/material';

interface NextProps<T> {
  forecast: T | null;
}

const NextForeCastSection = ({ forecast }: NextProps<any>) => {
  const data = forecast;

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const components = [];
  for (let i = 0; i < 40; i++) {
    const date = new Date();
    date.setHours(date.getHours() + i * 3);
    const item = data?.list?.[i];

    if (!data?.list) {
      components.push(<DataDivComp key={i} date={date} item={undefined} />);
      continue;
    }

    if (selectedDate) {
      const itemDate = item?.dt_txt?.split(" ")[0];
      if (itemDate !== selectedDate) continue;
    }

    components.push(<DataDivComp key={i} date={date} item={item} />);
  }

  const dateButtons = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dateButtons.push(
      <DateBtn
        key={i}
        index={i + 2}
        date={date}
        selectedDate={selectedDate}
        onClick={(selected) => setSelectedDate(selected)}
      />,
    );
  }

  return (
    <Box id="nextForecastDiv">
      <Typography variant="h4" component="h1" sx={{paddingBottom: "30px", fontWeight: "400"}}>
        Next 5 days
      </Typography>

      <Box id="buttonsDiv">
        <Box
          id="btnDiv1"
          className={`light-div ${selectedDate === null ? "active" : ""}`}
          onClick={() => setSelectedDate(null)}
          sx={{ cursor: 'pointer' }}
        >
          All Days
        </Box>
        
        {dateButtons}
      </Box>

      <Box id="dataDiv">
        {
          (selectedDate && !data) ? <></> : components
        }
      </Box>
    </Box>
  );
};

export default NextForeCastSection;
