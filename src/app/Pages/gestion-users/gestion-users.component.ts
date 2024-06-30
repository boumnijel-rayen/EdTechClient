import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrl: './gestion-users.component.scss'
})
export class GestionUsersComponent implements OnInit{

  users : any
  constructor(private auth : AuthServiceService){
    
  }

  ngOnInit(): void {
    this.auth.getAllUsers(this.auth.getToken()).subscribe((data : any) => {
      this.users = data
      console.log(this.users)
    })
  }


  test(){
    
    
  }

}
