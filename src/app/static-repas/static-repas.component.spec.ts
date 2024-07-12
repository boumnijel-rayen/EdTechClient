import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticRepasComponent } from './static-repas.component';

describe('StaticRepasComponent', () => {
  let component: StaticRepasComponent;
  let fixture: ComponentFixture<StaticRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaticRepasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
