import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { WeatherService } from "./services/weather.service";
import { ListViewComponent } from './components/list-view/list-view.component';
import { ItemViewComponent } from './components/item-view/item-view.component';

@NgModule({
  declarations: [AppComponent, ListViewComponent, ItemViewComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
