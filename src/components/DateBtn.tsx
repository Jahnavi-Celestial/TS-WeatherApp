import { Box } from '@mui/material';

interface DateBtnProps {
  index: number;
  date: Date;
  selectedDate: string | null;
  onClick: (date: string) => void;
}

const DateBtn = ({ index, date, selectedDate, onClick}: DateBtnProps) => {

  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const dateKey = date.toISOString().split("T")[0];

  return (
    <Box
      id={`btnDiv${index}`}
      className={`light-div btns ${selectedDate === dateKey ? "active" : ""}`}
      onClick={() => onClick(dateKey)}
    >
      <Box component="div">
        {formattedDate} {day}
      </Box>
    </Box>
  );
};

export default DateBtn;