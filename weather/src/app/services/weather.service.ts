import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  forecast: object;

  getForecast(city) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=7307df4ca48864d73b977cec3eb9735e`;
    return this.http.get(url);
  }

  setResult(data) {
    this.forecast = data;
    return true;
  }

  getResult() {
    return this.forecast;
  }
}
