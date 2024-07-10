import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { LISTBOX_VALUE_ACCESSOR } from 'primeng/listbox';
import { Ripple } from 'primeng/ripple';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  myForm: any;
  response : any;
  resEmail : any;
  invalidLogin :any
  userConn:any
  constructor(private builder : FormBuilder, private router : Router, private auth : AuthServiceService, private user : UserService) {
    this.myForm = this.builder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  connect(){
    console.log(this.myForm.value)
    this.auth.signIn(this.myForm.value.email, this.myForm.value.password).subscribe(
      (data) => {
        this.response = data;
        this.auth.setToken(this.response.token)
        this.auth.setEmail(this.myForm.value.email);
        this.invalidLogin = false;
      },
      (error : any) => {
        if (error.status == 423){
          this.invalidLogin = false;
          this.auth.setEmail(this.myForm.value.email)
          this.router.navigate(['/confirm']);
        }else{
          console.log(error);
          this.invalidLogin = true;
          return
        }

      },
    ).add(() => {
      console.log(this.auth.getEmail())
      console.log(this.auth.getToken())
      this.user.GetUser(this.auth.getEmail(), this.auth.getToken()).subscribe((data : any) => {
        this.userConn = data
        const roles : string[] = [];
        this.userConn.roles.forEach((element : string) => {
          roles.push(element)
        });
        this.auth.setRoles(roles)
        if (roles.includes('ADMIN'))
        {
          this.router.navigate(['/app/gestion-users']);
        }else{
          this.router.navigate(['/app/list-event']);
        }
    })
    });
  }
}
