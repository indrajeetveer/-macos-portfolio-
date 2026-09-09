import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const day = dateTime.toLocaleDateString("en-US", {
    weekday: "short",
  });

  const date = dateTime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const time = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="datetime">
      {day} {date} {time}
    </div>
  );
};

export default DateTime;