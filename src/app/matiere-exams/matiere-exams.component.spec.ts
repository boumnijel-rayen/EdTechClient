import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereExamsComponent } from './matiere-exams.component';

describe('MatiereExamsComponent', () => {
  let component: MatiereExamsComponent;
  let fixture: ComponentFixture<MatiereExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatiereExamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatiereExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
