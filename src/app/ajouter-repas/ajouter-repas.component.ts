import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repas } from '../models/Repas';
import { RestaurationServiceService } from '../Services/restauration-service.service';

@Component({
  selector: 'app-ajouter-repas',
  templateUrl: './ajouter-repas.component.html',
  styleUrl: './ajouter-repas.component.scss'
})
export class AjouterRepasComponent {

  foodForm: FormGroup;
  constructor(private fb: FormBuilder, private restaurantService: RestaurationServiceService) {
    // Initialize the form group with default values and validators
    this.foodForm = this.fb.group({
      id: [{ value: 0, disabled: true }],
      nom: ['', Validators.required],
      calories: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      categorie: ['', Validators.required],
      poidsCarbs: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      poidsProteines: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      poidsFats: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
    });








  }

  ngOnInit(): void { }

  // Method to handle form submission
  onSubmit() {
    if (this.foodForm.valid) {
      console.log(this.foodForm.value);
      let food = this.foodForm.value;
      this.restaurantService.ajouterRepas(food).subscribe((data: any) => {
        console.log(data);
      });
      // this.eventService.ajouterEvent()
      // Handle form submission, e.g., send to the server
    }
    this.foodForm.reset();
  }

  // Method to reset the form
  onReset() {
    this.foodForm.reset();
  }



  evenement: Repas = new Repas();


}
