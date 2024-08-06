import axios from "axios";

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser."));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

export async function getWeather({city}) {
  try {
    const { latitude, longitude } = await getCurrentLocation();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
          q: city,
          appid: import.meta.env.VITE_APP_ID,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
