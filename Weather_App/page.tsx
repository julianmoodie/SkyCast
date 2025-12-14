export default async function Index() {
  let weatherOut = "";
  let location = "Error";


  try {
    /* ---------------- IP ---------------- */
    const api = await fetch("https://ipapi.co/json/");
    if (!api.ok) throw new Error("Error fetching IP");
    const data = await api.json();
    location = data.city;

    /* ---------------- GEO ---------------- */
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1`
    );
    if (!geoRes.ok) throw new Error("Geocoding API error");
    const geoData = await geoRes.json();

    const { latitude, longitude } = geoData.results[0];
    /* ---------------- Weather ---------------- */
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    if (!weatherRes.ok) throw new Error("Geocoding API error");
    const weatherData = await weatherRes.json();

    weatherOut = `${weatherData.current_weather.temperature}°C`;
  } catch (error) {
    console.error(error);
    weatherOut = "Error fetching weather";
  }

  return (
    <main className="container">
      <h1>SkyCast</h1>
      <p className="subtitle">Current Weather</p>
      <div className="weather-box">{weatherOut}</div>
      <p className="location-subtitle">Current Location</p>
      <div className="your-location">{location}</div>
    </main>
  );
}
