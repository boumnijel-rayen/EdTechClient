import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatiereServiceService } from '../Services/matiere-service.service';

@Component({
  selector: 'app-add-matiere-dialog',
  templateUrl: './add-matiere-dialog.component.html',
  styleUrls: ['./add-matiere-dialog.component.scss']
})
export class AddMatiereDialogComponent {
  matiereForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matiereService: MatiereServiceService,
    private dialogRef: MatDialogRef<AddMatiereDialogComponent>
  ) {
    this.matiereForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.matiereForm.valid) {
      this.matiereService.createMatiere(this.matiereForm.value).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
