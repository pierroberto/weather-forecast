import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.css"]
})
export class ListViewComponent implements OnInit {
  constructor(private weather: WeatherService) {}

  generateForecast() {
    console.log("generating forcast...");
    return this.weather
      .getForecast("rossano")
      .subscribe(res => console.log("res", res));
  }

  ngOnInit() {
    this.generateForecast();
  }
}
