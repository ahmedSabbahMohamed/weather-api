import { groupByDay } from "../helpers";
import TodayWeather from "./TodayWeather";
import WeatherCard from "./WeatherCard";
import sun from "../assets/images/sun.svg";
import cloudBolt from "../assets/images/cloud-bolt.svg";
import cloudShower from "../assets/images/cloud-showers-heavy.svg";
import cloudSun from "../assets/images/cloud-sun.svg";
import cloud from "../assets/images/cloud.svg";
import snowflake from "../assets/images/snowflake.svg";

function DailyWeather({ dailyWeatehr }) {
  const weatherData = groupByDay(dailyWeatehr?.list);

  const allIcons = {
    "01d": sun,
    "01n": cloudSun,
    "02d": cloudSun,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloudBolt,
    "09d": cloudShower,
    "09n": cloudShower,
    "10d": cloudShower,
    "10n": cloudShower,
    "13d": snowflake,
    "13n": snowflake,
    "11d":cloudBolt,
    "11n":cloudBolt,
  };

  console.log(weatherData);

  return (
    <>
      <div className="my-10">
        <TodayWeather
          weatherData={weatherData}
          date={Object.keys(weatherData)[0]}
          allIcons={allIcons}
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        {Object.keys(weatherData)
          .slice(1)
          .map((date) => (
            <WeatherCard
              key={date}
              weatherData={weatherData}
              date={date}
              allIcons={allIcons}
            />
          ))}
      </div>
    </>
  );
}

export default DailyWeather;
