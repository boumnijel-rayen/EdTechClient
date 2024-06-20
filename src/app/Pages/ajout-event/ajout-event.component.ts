import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-event',
  templateUrl: './ajout-event.component.html',
  styleUrl: './ajout-event.component.css'
})
export class AjoutEventComponent implements OnInit {

  evenementForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with default values and validators
    this.evenementForm = this.fb.group({
      id: [{ value: 0, disabled: true }], // ID is typically not editable
      nom: ['', Validators.required],
      description: ['', Validators.required],
      date: [null, Validators.required]  // PrimeNG Calendar uses null for no date
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit() {
    if (this.evenementForm.valid) {
      console.log(this.evenementForm.value);
      // Handle form submission, e.g., send to the server
    }
  }

  // Method to reset the form
  onReset() {
    this.evenementForm.reset();
  }
}
