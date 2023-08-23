import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      email: [''],
      password: [''],
    });
  }

  registerWithEmailAndPassword(form: FormGroup) {
    this.authService
      .registerWithEmailAndPassword(form.value)
      .then((response: any) => {
        this.router.navigate(['/admin']);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
