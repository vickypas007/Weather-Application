import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
city=""
 
  constructor(private http :HttpClient) { }

  searchWeatherInfo(city: string): Observable<any> {
    const APPID = '7a211c68435846ab04153a9d815b09f3';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APPID + '&units=metric';
    return this.http.get(url);
        
        
}
}
