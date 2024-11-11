export default class WeatherData {
  get temperature(): number {
    return this._temperature;
  }

  get humidity(): number {
    return this._humidity;
  }

  get pressure(): number {
    return this._pressure;
  }

  private _temperature = 0;

  private _humidity = 0;

  private _pressure = 0;

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.notifyObservers();
  }

  private _observers: WeatherDataObserver[] = [];

  private notifyObservers(): void {
    this._observers.forEach(observer => observer.weatherUpdated(this));
  }

  public removeObserver(observer: WeatherDataObserver): void{
    this._observers = this._observers.filter(existingObserver => existingObserver !== observer);
  }

  public addObserver(observer: WeatherDataObserver): void {
    this._observers.push(observer);
  }
}

export interface WeatherDataObserver {
  weatherUpdated(currentData: WeatherData): void;
}
