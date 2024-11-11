import WeatherData, {WeatherDataObserver} from './WeatherData';

export default class CurrentConditionsDisplay implements WeatherDataObserver {
  private _temperature = 0;
  private _humidity = 0;

  weatherUpdated(currentData: WeatherData): void {
    this._humidity = currentData.humidity;
    this._temperature = currentData.temperature;
    this.display();
  }

  display(): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', this._temperature, this._humidity);
  }
}
