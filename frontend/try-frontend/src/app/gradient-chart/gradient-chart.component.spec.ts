import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientChartComponent } from './gradient-chart.component';

describe('GradientChartComponent', () => {
  let component: GradientChartComponent;
  let fixture: ComponentFixture<GradientChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
