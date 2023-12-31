import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public formRegister: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formRegister = this.initializeFormLogin();
  }

  initializeFormLogin(): FormGroup {
    return this.formBuilder.group({
      email: ['', [
        Validators.required,
      ]],
      password: ['',[
        Validators.required,
      ]],
    });
  }

  registerWithEmailAndPassword(form: FormGroup) {
    this.authService
      .registerWithEmailAndPassword(form.value)
      .then((response: any) => {
        this.router.navigate(['/login']);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
