import { useState } from "react";
import DataDivComp from "./DataDivComp";
import DateBtn from "./DateBtn";

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
    <div id="nextForecastDiv">
      <h1 id="heading-forecast">Next 5 Days</h1>
      <div id="buttonsDiv">
        <div
          id="btnDiv1"
          className={`light-div btns ${selectedDate === null ? "active" : ""}`}
          onClick={() => setSelectedDate(null)}
        >
          All Days
        </div>
        {dateButtons}
      </div>
      <div id="dataDiv">
        {
            (selectedDate && !data) ? <></> : components
        }
      </div>
    </div>
  );
};

export default NextForeCastSection;
