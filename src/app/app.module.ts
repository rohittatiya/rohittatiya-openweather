import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../services/forecast.service';
import { DatePipe } from '../filters/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})

export class AppModule { }
