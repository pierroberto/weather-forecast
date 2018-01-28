import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor(private weather: WeatherService) {}
  @Output() data = new EventEmitter();
  city: string;
  temperature: number;

  query(e) {
    this.city = e;
  }

  search() {
    return this.weather.getForecast(this.city).subscribe(forecast => {
      if ((forecast as any).cod === "200") {
        this.temperature = (forecast as any).list[0].main.temp;
        this.weather.setResult({ temp: this.temperature });
      }
      console.log("res", forecast);
    });
  }

  ngOnInit() {}
}
