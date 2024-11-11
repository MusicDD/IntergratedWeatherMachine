import WeatherData from './WeatherData';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import StatisticsDisplay from './StatisticsDisplay';
import ForecastDisplay from './ForecastDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';

const weatherData = new WeatherData();
weatherData.addObserver(new StatisticsDisplay());
weatherData.addObserver(new ForecastDisplay());
weatherData.addObserver(new CurrentConditionsDisplay());
weatherData.addObserver(new HeatIndexDisplay());

weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
