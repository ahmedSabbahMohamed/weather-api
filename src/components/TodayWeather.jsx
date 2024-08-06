import { getDayName } from "../helpers";
import wind from "../assets/images/wind.svg"

function TodayWeather({ date, allIcons, weatherData }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between mx-auto items-center gap-6 w-full lg:w-2/3">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="font-extrabold text-xl text-cyan-950">
          {getDayName(date).toUpperCase()}
        </h2>
        <img
          className=" w-20 h-20"
          src={allIcons[weatherData[date][0].weather[0].icon]}
        />
        <h3 className="text-cyan-800 font-bold">
          {weatherData[date][0]?.weather[0]?.description}
        </h3>
      </div>
      <h2 className="text-3xl font-extrabold text-cyan-700">
        {weatherData[date][0]?.main?.temp}°C
      </h2>

      <div className="grid gap-2">
        <p className="text-cyan-600 font-bol">
          <span className="font-bold text-cyan-900">Pressure:</span>
          {weatherData[date][0]?.main?.pressure}
        </p>
        <p className="text-cyan-600 font-bol">
          <span className="font-bold text-cyan-900">Min:</span>
          {weatherData[date][0]?.main?.temp_min}°C
        </p>
        <p className="text-cyan-600 font-bol">
          <span className="font-bold text-cyan-900">Max:</span>
          {weatherData[date][0]?.main?.temp_max}°C
        </p>
        <div className="flex gap-2 items-center">
          <img className="w-8 h-8" src={wind} alt="wind" />
          <p>{weatherData[date][0]?.wind?.speed}m/s</p>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather