import CalendarStrip from "react-native-slideable-calendar-strip";
import { useState } from "react/cjs/react.development";
import React from "react";
import MyComponent from "../components/Accordion";
import Card1 from "../components/Card";

const Completed = () => {
  const [date, setDate] = useState(null);
  return (
    <>
      <CalendarStrip
        showWeekNumber
        selectedDate={date}
        onPressDate={(date) => setDate(date)}
        onPressGoToday={(today) => setDate(today)}
        onSwipeDown={() => {
          alert("onSwipeDown");
        }}
        markedDate={["2018-05-04", "2018-05-15", "2018-06-04", "2018-05-01"]}
        weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
      />
      <MyComponent />
    </>
  );
};

export default Completed;
