import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from './../../filters/date.pipe';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent, DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create weather component', () => {
    expect(component).toBeTruthy();
  });
});
