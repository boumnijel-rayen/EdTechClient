import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../../Models/Utilisateur';
import { EventServiceService } from '../../Services/event-service.service';
import { AuthServiceService } from '../../Services/auth-service.service';
import { UploadEvent } from 'primeng/fileupload';
import { UserServiceService } from '../../Services/user-service.service';
import { Evenement } from '../../Models/Evenement';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-modif-event',
  templateUrl: './modif-event.component.html',
  styleUrl: './modif-event.component.scss'
})
export class ModifEventComponent {
  @Output() eventAdded = new EventEmitter<any>();
  @Input() eventId: number | null = null;
  evenementForm: FormGroup;
  utilisateurs !: Utilisateur[];
  usersId: number[] = [];
  idEvent: any;
  image: any;
  imageError: string | null = null;
  messageService: any;
  currentImage: any;
  constructor(private fb: FormBuilder, private eventService : EventServiceService, private auth : AuthServiceService,private userService :UserServiceService, private activeRoute : ActivatedRoute, private router : Router) {
    // Initialize the form group with default values and validators

    this.evenementForm = this.fb.group({
      id: [],
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
    this.loadEventData(this.eventId)
  }

  // Method to handle form submission
  onSubmit() {
    if (this.evenementForm.valid) {
      let organisateurs = this.evenementForm.controls['organisateurs'].value;
      let event : any ={
        id : this.evenementForm.controls['id'].value,
        nom : this.evenementForm.controls['nom'].value,
         date : this.evenementForm.controls['date'].value,
         description: this.evenementForm.controls['description'].value,
         image : this.evenementForm.controls['image'].value

      };
      console.log(event)
      this.eventService.modifierEvent(event).subscribe((data : any) => {
        this.idEvent = data.id;
      }).add(() => {
        if (this.idEvent) {

          organisateurs.forEach((element:any) => {
            this.usersId.push(element.id)
          });
          console.log(this.usersId)
          this.eventService.modifierEquipeOrg(this.idEvent, this.usersId).subscribe((response: any) => {
            // Handle the response from ajouteEquipeOrg if needed
          });
        }
      })

    }
    this.evenementForm.reset();
    this.eventAdded.emit(event);
    this.onReturn();
  }

  // Method to reset the form
  onReset() {
    this.evenementForm.reset();
  }

  onReturn(){
    this.router.navigate(['/app/list-event'])
  }



ngOnInit(): void {

  this.loadEventData(this.activeRoute.snapshot.paramMap.get('id'));
}

loadEventData(idEvent : any) {
  this.eventService.getEventById(idEvent).subscribe((event: Evenement) => {
    console.log(event)
    this.evenementForm.patchValue({
      id: event.id,
      nom: event.nom,
      description: event.description,
      date: new Date(event.date),
    });
  });
  this.eventService.getEquipeOrgByEventId(idEvent).subscribe((orgs : any)=>{
    console.log(orgs)
    this.evenementForm.patchValue({
      organisateurs : orgs
    })
  })
}











}
