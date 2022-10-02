import React from "react";

function Calendar() {
  return (
    <div className="calendar" align="center">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=dGhpbmtpbmdvdXRsYXVAZ21haWwuY29t&src=OTY0NzQ2ZTJlOTUzOGM5NzQ4ZGVkZDY3YTQ2Yjc2NzAwNWNmMDE4MDIxNjNlZjA3NWZjOTY3YzUwYjg1ZjlmYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%230B8043"
        width="1000"
        height="600"
        frameBorder="20"
        scrolling="yes"
      ></iframe>
    </div>
  );
}

export default Calendar;
