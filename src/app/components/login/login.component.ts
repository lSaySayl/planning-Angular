import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formLogin: FormGroup;

  constructor (private authService: AuthService, private router:Router, private formBuilder: FormBuilder) {
    this.formLogin = this.initializeFormLogin();

  }

  initializeFormLogin (): FormGroup {
    return this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }


  loginWithGoogle(){
    this.authService.signInWithGoogle()
    .then((response: any )=> {
      this.router.navigate(['/admin']);
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    })

  }

  loginWithEmailAndPassword(form: FormGroup) {
    this.authService.signInWithEmailAndPassword(form.value)
      .then((response: any) => {
        this.router.navigate(['/admin']);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }


}
