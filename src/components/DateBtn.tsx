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
    <div
      id={`btnDiv${index}`}
      className={`light-div btns ${
        selectedDate === dateKey ? "active" : ""
      }`}
      onClick={() => onClick(dateKey)}
    >
      <div>{formattedDate} {day}</div>
    </div>
  );
};

export default DateBtn;