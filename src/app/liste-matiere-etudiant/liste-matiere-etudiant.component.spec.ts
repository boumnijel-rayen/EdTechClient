import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatiereEtudiantComponent } from './liste-matiere-etudiant.component';

describe('ListeMatiereEtudiantComponent', () => {
  let component: ListeMatiereEtudiantComponent;
  let fixture: ComponentFixture<ListeMatiereEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeMatiereEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMatiereEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
