import React, { useEffect, useState } from "react";
import './Dashboardcss.css'

const WeatherInfo = () => {
  const [timeData, setTimeData] = useState({
    time: "",
    date: "",
    day: "",
  });
  const [temperature, setTemperature] = useState(null);

  // 🕒 Use browser's own time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      const day = now.toLocaleDateString("en-US", { weekday: "long" });

      setTimeData({
        time: formattedTime,
        date: formattedDate,
        day,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // every second
    return () => clearInterval(interval);
  }, []);

  // 🌡️ Fetch temperature once every 10 minutes
  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const latitude = 14.5995;
        const longitude = 120.9842;
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const data = await res.json();
        setTemperature(data.current_weather.temperature);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };

    fetchTemperature();
    const interval = setInterval(fetchTemperature, 600000); // every 10 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-div-right">
      <div>
        <h1>{timeData.time || "Loading..."}</h1>
        <h4>
          {timeData.date}, {timeData.day}
        </h4>
      </div>
      <div>
        <h1>{temperature !== null ? `${temperature}°C` : "Loading..."}</h1>
      </div>
    </div>
  );
};

export default WeatherInfo;
