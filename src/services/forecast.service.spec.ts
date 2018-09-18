import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { WeatherService } from './forecast.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherService
      ],
      imports: [HttpClientModule]
    });
  });

  it('Should service be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
    //expect(true).toBe(true);
  })
  );

  it('Should service return 200 as an observable of Observable<any[]>', async(() => {
    let weatherService: WeatherService = getTestBed().get(WeatherService);
    weatherService.getWeatherForecast('Bangalore').subscribe(weather => {
      expect(weather["weatherData"].length).toBe(5);
    }, error => {
      expect(error).toEqual(404);
    });
  })
  );

  it('Should service return 404 as an Observable error when no data found for City', async(() => {
    let weatherService: WeatherService = getTestBed().get(WeatherService);
    weatherService.getWeatherForecast('aa').subscribe(weather => {
      expect(weather["weatherData"].length).toBe(5);
    }, error => {
      expect(error).toEqual(404);
    });
  })
  );

});
