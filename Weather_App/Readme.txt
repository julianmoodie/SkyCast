README.txt

SkyCast (Next.js Weather App)

Overview
SkyCast is a Next.js application that shows current weather and a 7-day forecast. It uses an IP lookup to get the user’s city, converts the city to latitude/longitude, then fetches weather data from Open-Meteo.

Routes (Pages)

/ (Home)
Displays current temperature and the detected city/location.

/forecast (7 Day Forecast)
Displays 7 days of temperatures using Open-Meteo daily forecast data.

/contact (Contact)
Simple contact page (static content or form, depending on implementation).

Components

Navbar
Navigation links to Home, 7 Day Forecast, and Contact.

(Optional) ForecastList / ForecastItem (if used)
Renders daily forecast rows (weekday + temperature).

(Optional) Layout / Container components (if used)
Shared UI layout and styling wrapper.

State Management Structure
This app uses React state only where needed:

Home and Forecast pages store output text/values (weatherOut, location, forecast output) during rendering.

Data flow is top-down: page fetches data and passes to child components via props (if forecast is split into components).

No global state library is used.

External APIs Used

IP location: https://ipapi.co/json/

Geocoding: https://geocoding-api.open-meteo.com/v1/search

Weather: https://api.open-meteo.com/v1/forecast

How to Run

Install dependencies:
npm install

Start the dev server:
npm run dev

Open in browser:
http://localhost:3000

