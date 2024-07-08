import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatiereDialogComponent } from './add-matiere-dialog.component';

describe('AddMatiereDialogComponent', () => {
  let component: AddMatiereDialogComponent;
  let fixture: ComponentFixture<AddMatiereDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMatiereDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMatiereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
