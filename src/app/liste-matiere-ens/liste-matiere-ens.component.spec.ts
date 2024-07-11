import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMatiereEnsComponent } from './liste-matiere-ens.component';

describe('ListeMatiereEnsComponent', () => {
  let component: ListeMatiereEnsComponent;
  let fixture: ComponentFixture<ListeMatiereEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeMatiereEnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMatiereEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
