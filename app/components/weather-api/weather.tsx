"use client";

import React, { useState, useEffect } from "react";

const WeatherDisplay: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=3140ea46d2b84ff4b0a83943250201&q=London`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Weather Information</h2>
      <p>
        <strong>Location:</strong> {weatherData.location.name}, {weatherData.location.country}
      </p>
      <p>
        <strong>Temperature:</strong> {weatherData.current.temp_c}°C
      </p>
      <p>
        <strong>Condition:</strong> {weatherData.current.condition.text}
      </p>
      <img
        src={weatherData.current.condition.icon}
        alt={weatherData.current.condition.text}
        className="w-16 h-16"
      />
    </div>
  );
};

export default WeatherDisplay;
