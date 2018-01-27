import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable()
export class WeatherService {
  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}

  getForecast(city) {
    const url = `api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=7307df4ca48864d73b977cec3eb9735e`;
    return this.http.get(url);
  }
}
