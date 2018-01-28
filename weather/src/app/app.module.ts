import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { WeatherService } from "./services/weather.service";
import { ListViewComponent } from "./components/list-view/list-view.component";
import { ItemViewComponent } from "./components/item-view/item-view.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, ListViewComponent, ItemViewComponent, DashboardComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
