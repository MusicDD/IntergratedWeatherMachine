import WeatherData, {WeatherDataObserver} from './WeatherData';

export default class StatisticsDisplay implements WeatherDataObserver {
  private _maxTemp = 0;

  private _minTemp = 0;

  private _tempSum = 0;

  private _numReadings = 0;

  display(): void {
    // eslint-disable-next-line
    console.log('Avg/max/min temperature = %f/%i/%i', this._tempSum / this._numReadings, this._maxTemp, this._minTemp);
  }

  weatherUpdated(currentData: WeatherData): void {
    this._tempSum += currentData.temperature;
    this._numReadings += 1;
    if (this._maxTemp < currentData.temperature) {
      this._maxTemp = currentData.temperature;
    }
    if (this._minTemp > currentData.temperature) {
      this._minTemp = currentData.temperature;
    }
    this.display();
  }
}
