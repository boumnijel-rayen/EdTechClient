import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evenement } from '../../models/Evenement';
import { EventServiceService } from '../../Services/event-service.service';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-ajout-event',
  templateUrl: './ajout-event.component.html',
  styleUrl: './ajout-event.component.css'
})
export class AjoutEventComponent implements OnInit {

  evenementForm: FormGroup;

  constructor(private fb: FormBuilder, private eventService : EventServiceService, private auth : AuthServiceService) {
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
      let event = {
        nom : "test",
        description: "test",
        date : null
      }
      this.auth.signIn("medazizbentourkia@gmail.com", "123456").subscribe((data : any) => {
        console.log(data.token)
        localStorage.setItem('token',data.token)
      })
      .add(() => {
        this.eventService.ajouterEvent(event,token).subscribe((data : any) => {
          console.log(data)
        })
      })


      var token = localStorage.getItem("TOKEN");
      console.log(token);
      this.eventService.ajouterEvent(event,token).subscribe((data : any) => {
        console.log(data)
      })
      // this.eventService.ajouterEvent()
      // Handle form submission, e.g., send to the server
    }
  }

  // Method to reset the form
  onReset() {
    this.evenementForm.reset();
  }



  evenement: Evenement = new Evenement();

}
