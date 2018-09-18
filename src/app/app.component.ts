import { WeatherService } from '../services/forecast.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Open Weather Forecast';
  weatherForecastData: string[];
  errorMessage: any;
  cityName: string;
  searchForm: FormGroup;
  loader: boolean;
  isNotFound: boolean;
  city: string;
  isDataload: boolean;

  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      cityName: [null, Validators.required]
    });
  }

  getWeather() {
    this.city = this.searchForm.value.cityName;
    this.isNotFound = false;
    this.loader = true;
    this.isDataload = false;
    this.weatherService.getWeatherForecast(this.city).subscribe(
      data => {
        this.weatherForecastData = data;
        this.loader = false;
        this.isDataload = true;
      },
      err => {
        this.errorMessage = <any>err;
        this.loader = false;
        this.isNotFound = true;
      }
    );
  }
}
