import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { LISTBOX_VALUE_ACCESSOR } from 'primeng/listbox';

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
  constructor(private builder : FormBuilder, private router : Router, private auth : AuthServiceService) { 
    this.myForm = this.builder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  connect(){
    this.auth.signIn(this.myForm.value.email, this.myForm.value.password).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
        this.auth.setToken(this.response.token)
        this.invalidLogin = false;
        this.router.navigate(['/app/gestion-users']);
      },
      (error) => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
