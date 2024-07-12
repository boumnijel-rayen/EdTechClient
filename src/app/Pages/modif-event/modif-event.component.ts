import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../../models/Utilisateur';
import { EventServiceService } from '../../Services/event-service.service';
import { AuthServiceService } from '../../Services/auth-service.service';
import { UploadEvent } from 'primeng/fileupload';
import { UserServiceService } from '../../Services/user-service.service';
import { Evenement } from '../../models/evenement';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { formatDate } from '@angular/common';

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
      dateDeb: [null, Validators.required],  // PrimeNG Calendar uses null for no date
      dateFin: [null, Validators.required],
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
        dateDeb : this.evenementForm.controls['dateDeb'].value,
        dateFin : this.evenementForm.controls['dateFin'].value,
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
  this.evenementForm.valueChanges.subscribe(() => {
    this.checkDateRange();
  });
}
checkDateRange(): void {
  const today = formatDate(new Date(), 'yyyy/MM/dd', 'en');
  console.log(today)
  const dateDeb =  formatDate(this.evenementForm.get('dateDeb')?.value, 'yyyy/MM/dd', 'en');
  const dateFin = formatDate(this.evenementForm.get('dateFin')?.value, 'yyyy/MM/dd', 'en');
  console.log(dateDeb)
  console.log(dateFin)
  if (dateDeb < today){
    this.evenementForm.get('dateDeb')?.setErrors({ dateDebError: true });
  }
  else{
    this.evenementForm.get('dateDeb')?.setErrors(null);
  }
  if ( dateDeb > dateFin) {
    this.evenementForm.get('dateFin')?.setErrors({ dateRange: true });
  } else {
    this.evenementForm.get('dateFin')?.setErrors(null);
  }

}
loadEventData(idEvent : any) {
  this.eventService.getEventById(idEvent).subscribe((event: Evenement) => {
    console.log(event)
    this.evenementForm.patchValue({
      id: event.id,
      nom: event.nom,
      description: event.description,
      dateDeb: new Date(event.dateDeb),
      dateFin: new Date(event.dateDeb)
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
