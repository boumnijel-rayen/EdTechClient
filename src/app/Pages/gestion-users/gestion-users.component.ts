import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { UserService } from '../../Services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrl: './gestion-users.component.scss'
})
export class GestionUsersComponent implements OnInit{

  users : any
  id : any
  nom : any
  prenom : any
  email : any
  modifUser : any
  constructor(private auth : AuthServiceService, private user : UserService, private builder : FormBuilder, private messageService: MessageService){
    this.modifUser = this.builder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.user.getAllUsers(this.auth.getToken()).subscribe((data : any) => {
      this.users = data
    })
  }

  showUser(id : any, nom : any, prenom : any, email : any){
    this.id = id
    this.nom = nom
    this.prenom = prenom
    this.email = email
  }

  modifier(){
    let user = {
      id : this.id,
      nom : this.nom,
      prenom : this.prenom,
      email : this.email
    }
    this.user.updateUser(this.auth.getToken(), user).subscribe((data : any) => {
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Modification effectuée avec succès'});
      this.ngOnInit();
    },
    (error : any) => {
      if (error.error.message == 'email_existe'){
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Email existe déja'});
      }
    })
  }

  archiver(id : any){
    this.user.archiver(this.auth.getToken(), id).subscribe((data : any) => {
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Utilisateur archivé avec succès'});
      this.ngOnInit()
    })
  }

  activer(id : any){
    this.user.activer(this.auth.getToken(), id).subscribe((data : any) => {
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Utilisateur activé avec succès'});
      this.ngOnInit()
    })
  }

}
