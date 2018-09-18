import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { throwError } from 'rxjs';

/**
 * Service for fetching weather forecast data from Openweathermap API
 */
@Injectable()
export class WeatherService {
    constructor(private http: HttpClient) {}

    getWeatherForecast(cityName): Observable<any[]> {
        return this.http
            .get(
                environment.baseUrl +
                '?q=' + cityName +
                '&appid=' + environment.appId +
                '&units=' + environment.units
            )
            .map(response => this.extractData(response))
            .catch(this.handleError);
    }

    /**
     * Callback function for catching AJAX call error
     *
     * @param {any} error error object
     * @returns throws error message
     */
    private handleError(error: any) {
        let errMsg: string;
        errMsg = error.status ? error.status : error.toString();
        return throwError(errMsg);
    }

    /**
     * Group openweathermap api response to date
     *
     * @param {any} arr array to group
     * @param {string} key key to group
     * @returns {any} datewise grouped array
     */
    private groupBy(arr: any, key: string) {
        return arr.reduce((item, value) => {
            const cDate = new Date(value[key] * 1000);
            const monthFormat = `${cDate.getMonth() +
                1}/${cDate.getDate()}/${cDate.getFullYear()}`;
            (item[monthFormat] = item[monthFormat] || []).push(value);
            return item;
        }, {});
    }

    /**
     * Extract 5 days weatherforecast grouped by date
     *
     * @param {any} res openweathermap api response object
     * @returns {any} grouped forecast array for 5 days
     */
    private extractData(res: any): any {
        let resObj = { weatherData: [], city: {} };
        let body = res;
        body = this.groupBy(body.list, 'dt');
        body = Object.values(body);
        resObj.weatherData = body.slice(0, 5);
        resObj.city = res.city;
        return resObj;
    }
}
