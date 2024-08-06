import { getDayName } from "../helpers";
import wind from "../assets/images/wind.svg";

function WeatherCard({ weatherData, date, allIcons }) {

  return (
    <div className="flex flex-col justify-center items-center sm:items-start gap-2 col-span-12 sm:col-span-6 lg:col-span-3 p-3 rounded-md shadow border border-slate-300">
      <h2 className="font-extrabold text-lg text-cyan-950">
        {getDayName(date).toUpperCase()}
      </h2>
      <h3 className="text-cyan-800 font-bold">
        {weatherData[date][0]?.weather[0]?.description}
      </h3>
      <img
        className="w-14 h-14"
        src={allIcons[weatherData[date][0].weather[0].icon]}
      />
      <h2 className="text-2xl font-bold text-cyan-600">
        {weatherData[date][0]?.main?.temp}°C
      </h2>
      <div className="flex gap-5">
        <p className="text-cyan-600 font-bol">
          <span className="font-bold text-cyan-900">Min:</span>
          {weatherData[date][0]?.main?.temp_min}°C
        </p>
        <p className="text-cyan-600 font-bol">
          <span className="font-bold text-cyan-900">Max:</span>
          {weatherData[date][0]?.main?.temp_max}°C
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <img className="w-8 h-8" src={wind} alt="wind" />
        <p>{weatherData[date][0]?.wind?.speed}m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
