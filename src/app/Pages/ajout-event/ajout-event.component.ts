import { UserServiceService } from './../../Services/user-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evenement } from '../../models/evenement';
import { EventServiceService } from '../../Services/event-service.service';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Utilisateur } from '../../models/Utilisateur';
import { UploadEvent } from 'primeng/fileupload';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-ajout-event',
  templateUrl: './ajout-event.component.html',
  styleUrl: './ajout-event.component.css'
})
export class AjoutEventComponent implements OnInit {
  @Output() eventAdded = new EventEmitter<any>();
  evenementForm: FormGroup;
  utilisateurs !: Utilisateur[];
  usersId: number[] = [];
  idEvent: any;
  image: any;
  imageError: string | null = null;
  messageService: any;
  constructor(private fb: FormBuilder, private eventService : EventServiceService, private auth : AuthServiceService,private userService :UserServiceService) {
    // Initialize the form group with default values and validators
    this.evenementForm = this.fb.group({
      id: [{ value: 0, disabled: true }], // ID is typically not editable
      nom: ['', Validators.required],
      description: ['', Validators.required],
      date: [null, Validators.required],  // PrimeNG Calendar uses null for no date
      organisateurs:[[],Validators.required],
      image : [null]
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
      let organisateurs = this.evenementForm.controls['organisateurs'].value;
      let event : any ={
        nom : this.evenementForm.controls['nom'].value,
         date : this.evenementForm.controls['date'].value,
         description: this.evenementForm.controls['description'].value,
         image : this.evenementForm.controls['image'].value

      };
      console.log(event)
      this.eventService.ajouterEvent(event).subscribe((data : any) => {
        this.idEvent = data.id;
      }).add(() => {
        if (this.idEvent) {

          organisateurs.forEach((element:any) => {
            this.usersId.push(element.id)
          });
          console.log(this.usersId)
          this.eventService.ajouteEquipeOrg(this.idEvent, this.usersId).subscribe((response: any) => {
            // Handle the response from ajouteEquipeOrg if needed
          });
        }
      })


      this.eventAdded.emit(event);
    }
    this.evenementForm.reset();
  }

  // Method to reset the form
  onReset() {
    this.evenementForm.reset();
  }


  onImageUpload(event: HttpEvent<any>) {
    if (event.type === HttpEventType.Response && event.body) {
      const file = event.body;
      if (file.size > 1000000) {
        this.imageError = 'La taille de l\'image ne doit pas dépasser 1 Mo.';
      } else {
        this.imageError = null;
        this.image = file;
        this.evenementForm.patchValue({ image: this.image });
      }
    }
  }
  onUpload(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
}



}
