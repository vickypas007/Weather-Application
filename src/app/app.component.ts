import { WeatherService } from './weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mWeather:any=[];
  state='';
  constructor(public weatherApi :WeatherService){
    
  }

  ngOnInit(){
  
  }
  onClick(value :string)
  {
    this.state=value;
    this.weatherApi.city=value;
    console.log(this.state)
    this.weatherApi.searchWeatherInfo(value).subscribe(data =>{
      this.mWeather.push(data);
      console.log(this.mWeather);

    })
  }

}
