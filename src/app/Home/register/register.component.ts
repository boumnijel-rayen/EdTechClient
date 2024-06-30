import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  myForm : any;
  EmailExist :any
  constructor(private formBuilder : FormBuilder, private router : Router, private authService : AuthServiceService) { 
    this.myForm = this.formBuilder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    },{
      validators: [this.controlPassword('password'), this.controlPasswordConfirmation('password', 'confirmPassword')]
    });
  }

  private controlPassword(controlPassword : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const password = FormGroup.get(controlPassword)?.value;
      let test : boolean = true;
      var regExpLower = /[a-z]/g;
      var regExpUpper = /[A-Z]/g;
      var regExpNumber = /[0-9]/g;
      var regExpSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

      if (!regExpLower.test(password)) {
        test = false;
      }
      if(!regExpUpper.test(password)){
        test = false;
      }
      if(!regExpNumber.test(password)){
        test = false;
      }
      if(!regExpSpecial.test(password)){
        test = false;
      }
      if((password.length < 8) || (password.length > 32)){
        test = false;
      }

      if(!test){
        return {
          passworControlNotValid: true
        }
      }else{
        return null;     
      }

    }
  }

  private controlPasswordConfirmation(controlPassword : string, controlConfirmation : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const password = FormGroup.get(controlPassword)?.value;
      const confirmation = FormGroup.get(controlConfirmation)?.value;
      
      if(password != confirmation){
        return {
          passworConfirmationControlNotValid: true
        }
      }else{
        return null;     
      }

    }
  }

  ngOnInit(): void {
  }

  register(){
    let user = {
      nom : this.myForm.value.nom,
      prenom : this.myForm.value.prenom,
      email : this.myForm.value.email,
      password : this.myForm.value.password
    }

    this.authService.signUp(user).subscribe(
      (data:any) => {
        this.EmailExist = false
        this.authService.setEmail(user.email)
        this.router.navigate(['/confirm']);
      },
      (error : any) => {
        if (error.error.message == 'email_existe'){
          this.EmailExist = true
        }
      }
    );
  }
}
