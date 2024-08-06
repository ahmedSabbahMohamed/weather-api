import { useEffect, useState } from "react";
import { getWeather } from "../weatherService";
import { Case, Switch } from "react-if";
import Input from "./components/Input";
import DailyWeather from "./components/DailyWeather";
import Location from "./components/Location";
import notFound from "./assets/images/notfount.gif";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);
        const data = await getWeather({ city });
        setWeatherData(data);
      } catch (err) {
        setError(err?.response?.data?.message || "Country not found");
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  const changeCity = (data) => setCity(data);
  return (
    <div className="py-8">
      <div className="w-full px-2 sm:px-0 mx-auto sm:w-1/2 md:w-1/3 lg:h-1/4 mb-8">
        <Input inputValue={changeCity} />
      </div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-314px)]">
        <Switch>
          <Case condition={loading}>
            <span className="animate-ping inline-flex h-10 w-10 rounded-full bg-sky-400 opacity-75"></span>
          </Case>
          <Case condition={error}>
            <img className="w-1/2 lg:w-1/3 h-auto" src={notFound} alt="not found" />
            <p className="text-red-500">{error}</p>
          </Case>
          <Case condition={weatherData}>
            <div className="container mx-auto px-2 sm:px-0">
              <Location location={weatherData?.city} />
              <DailyWeather dailyWeatehr={weatherData} />
            </div>
          </Case>
        </Switch>
      </div>
    </div>
  );
}

export default App;
