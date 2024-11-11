import WeatherData, {WeatherDataObserver} from './WeatherData';

export default class ForecastDisplay implements WeatherDataObserver {
  private _currentPressure = 0;

  private _lastPressure = 0;

  private _forecast = "Unknown";

  display(): void {
    // eslint-disable-next-line
    console.log('Forecast: %s', this._forecast);
  }

  weatherUpdated(currentData: WeatherData): void {
    this._lastPressure = this._currentPressure;
    this._currentPressure = currentData.pressure;
    if (this._currentPressure > this._lastPressure)
      this._forecast = 'Improving weather on the way!';
    else if (this._currentPressure === this._lastPressure)
      this._forecast = 'More of the same';
    else
      this._forecast = 'Watch out for cooler, rainy weather';
    this.display();
  }

}
