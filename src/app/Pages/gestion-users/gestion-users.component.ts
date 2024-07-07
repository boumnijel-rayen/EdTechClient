import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrl: './gestion-users.component.scss'
})
export class GestionUsersComponent implements OnInit{

  users : any
  constructor(private auth : AuthServiceService, private user : UserService){
    
  }

  ngOnInit(): void {
    this.user.getAllUsers(this.auth.getToken()).subscribe((data : any) => {
      this.users = data
    })
  }


  test(){
    
    
  }

}
