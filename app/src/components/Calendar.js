import React from "react";

function Calendar() {
  return (
    <div className="calendar" align="center">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"
        frameBorder="20"
        scrolling="yes"
      ></iframe>
    </div>
  );
}

export default Calendar;
