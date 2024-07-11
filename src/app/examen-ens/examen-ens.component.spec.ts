import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenEnsComponent } from './examen-ens.component';

describe('ExamenEnsComponent', () => {
  let component: ExamenEnsComponent;
  let fixture: ComponentFixture<ExamenEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamenEnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamenEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
