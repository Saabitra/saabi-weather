import { gql, useQuery } from "@apollo/client";

const fetchWeatherQuery = gql`
  query myQuery(
    $current_weather: String
    $daily: String = "apparent_temperature_max,apparent_temperature_min,precipitation_sum,sunrise,sunset,temperature_2m_max,temperature_2m_min,time,uv_index_clear_sky_max,uv_index_max,weathercode,windspeed_10m_max"
    $hourly: String = "apparent_temperature,cloudcover,is_day,precipitation,precipitation_probability,pressure_msl,relativehumidity_2m,temperature_2m,time,uv_index,uv_index_clear_sky,weathercode,winddirection_10m,winddirection_80m,windspeed_10m,windspeed_80m"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        windspeed_10m_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        windspeed_10m_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        cloudcover
        is_day
        precipitation
        precipitation_probability
        pressure_msl
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        weathercode
        winddirection_10m
        winddirection_80m
        windspeed_10m
        windspeed_80m
      }
      hourly_units {
        apparent_temperature
        cloudcover
        is_day
        precipitation
        precipitation_probability
        pressure_msl
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        weathercode
        winddirection_10m
        winddirection_80m
        windspeed_10m
        windspeed_80m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;
