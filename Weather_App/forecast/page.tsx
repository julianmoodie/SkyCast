let output = "";

try {
  const api = await fetch("https://ipapi.co/json/"); //fetch api 
  const data = await api.json();
  const location = data.city;

  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1`
  );
  const geoData = await geoRes.json();

  const { latitude, longitude } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max&forecast_days=7&timezone=America/Toronto`,
    { cache: "no-store" }
  );
  const weatherData = await weatherRes.json();
  //get weather within 7 days
  weatherData.daily.temperature_2m_max.forEach((temp: number, i: number) => {
    output += `${new Date(weatherData.daily.time[i]).toLocaleDateString("en-US", {
    weekday: "short",
    })} ${temp}°C | `;
  });


} catch {
  output = "Error fetching weather data.";
}

export default function Page() {
  return (
    <main className="container">
      <h1>7 Day Forecast</h1>
      <p className="weather-text">{output}</p>
    </main>
  );
}
