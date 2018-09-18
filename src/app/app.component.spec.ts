import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../services/forecast.service';
import { WeatherComponent } from './weather/weather.component';
import { DatePipe } from '../filters/date.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        WeatherComponent,
        DatePipe
      ],
      providers: [WeatherService]
    }).compileComponents();
  }));

  it('Should create the app component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
