import { Weather } from '../models/weather.model';
export function codeIconToFont(code: string): string {
  let fontClass = '';

  switch(code) {
    case '01d':
      fontClass = 'wi-day-sunny';
      break;
    case '02d':
      fontClass = 'wi-day-sunny-overcast';
      break;
    case '03d':
    case '03n':
      fontClass = 'wi-cloud';
      break;
    case '04d':
    case '04n':
      fontClass = 'wi-cloudy';
      break;
    case '09d':
      fontClass = 'wi-rain';
      break;
    case '10d':
      fontClass = 'wi-day-rain';
      break;
    case '11d':
      fontClass = 'wi-thunderstorm';
      break;
    case '13d':
      fontClass = 'wi-snow';
      break;
    case '50d':
      fontClass = 'wi-fog';
      break;
    case '01n':
      fontClass = 'wi-night-clear';
      break;
    case '02n':
      fontClass = 'wi-night-alt-cloudy';
      break;
    case '09n':
      fontClass = 'wi-night-alt-rain';
      break;
    case '10n':
      fontClass = 'wi-night-alt-showers';
      break;
    case '11n':
      fontClass = 'wi-night-alt-thunderstorm';
      break;
    case '13n':
      fontClass = 'wi-night-alt-snow';
      break;
    case '50n':
      fontClass = 'wi-night-fog';
      break;
    default:
      fontClass = 'wi-na';
      break;
  }
  return fontClass;
}

export function jsonWeatherToModel(json: any): Weather {
  let weather = <Weather>{};

  weather.id = json.id;
  weather.iconClass = codeIconToFont(json.weather[0].icon)
  weather.name = json.name;
  weather.main = {
    temp: json.main.temp,
    temp_max : json.main.temp_max,
    temp_min : json.main.temp_min
  };
  weather.wind = {
    speed : json.wind.speed
  };

  return weather;
}
