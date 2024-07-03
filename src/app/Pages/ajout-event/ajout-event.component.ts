import { UserServiceService } from './../../Services/user-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evenement } from '../../Models/Evenement';
import { EventServiceService } from '../../Services/event-service.service';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Utilisateur } from '../../Models/Utilisateur';

@Component({
  selector: 'app-ajout-event',
  templateUrl: './ajout-event.component.html',
  styleUrl: './ajout-event.component.css'
})
export class AjoutEventComponent implements OnInit {
  @Output() eventAdded = new EventEmitter<void>();
  evenementForm: FormGroup;
  utilisateurs !: Utilisateur[];
  constructor(private fb: FormBuilder, private eventService : EventServiceService, private auth : AuthServiceService,private userService :UserServiceService) {
    // Initialize the form group with default values and validators
    this.evenementForm = this.fb.group({
      id: [{ value: 0, disabled: true }], // ID is typically not editable
      nom: ['', Validators.required],
      description: ['', Validators.required],
      date: [null, Validators.required],  // PrimeNG Calendar uses null for no date
      organisateurs:[null,Validators.required]
    });
    userService.getUsers().subscribe(
      (data : Utilisateur[]) => {
        console.log(data);
        this.utilisateurs = data;
        console.log(this.utilisateurs)
      }
    );






  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit() {
    if (this.evenementForm.valid) {
      console.log(this.evenementForm.value);
      let event = this.evenementForm.value






      this.eventService.ajouterEvent(event).subscribe((data : any) => {
        console.log(data)
      })
      // this.eventService.ajouterEvent()
      // Handle form submission, e.g., send to the server
      this.eventAdded.emit(event);
    }
    this.evenementForm.reset();
  }

  // Method to reset the form
  onReset() {
    this.evenementForm.reset();
  }



  evenement: Evenement = new Evenement();

}
