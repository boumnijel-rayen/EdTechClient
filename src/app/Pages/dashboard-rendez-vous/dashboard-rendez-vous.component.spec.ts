import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRendezVousComponent } from './dashboard-rendez-vous.component';

describe('DashboardRendezVousComponent', () => {
  let component: DashboardRendezVousComponent;
  let fixture: ComponentFixture<DashboardRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardRendezVousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
