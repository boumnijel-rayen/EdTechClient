import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsEventComponent } from './stats-event.component';

describe('StatsEventComponent', () => {
  let component: StatsEventComponent;
  let fixture: ComponentFixture<StatsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatsEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
