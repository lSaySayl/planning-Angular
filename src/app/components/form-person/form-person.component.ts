import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss'],
})
export class FormPersonComponent {
  public formPerson: FormGroup;

  constructor(private formBuilder: FormBuilder, private shareDataService: SharedDataService, private router: Router) {
    this.formPerson = this.initializeFormPerson();
  }

  public initializeFormPerson(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^(?=(?:[^0-9]*[0-9]){0,3}[^0-9]*$)/),
        ],
      ],
      isPlayer: [false],
      isAdmin: [false],
    });
  }

  //Método para enviar el formulario y capturar la información de mi input name.

  public submitForm(): void {
    if (this.formPerson.valid) {
      const inputValue = this.formPerson.get('name')?.value;
      this.shareDataService.setInputCreatePlayer(inputValue);

      // Verificar si es administrador y establecer el rol correspondiente
      const isAdmin = this.formPerson.get('isAdmin')?.value;
      const isPlayer = isAdmin ? false : this.formPerson.get('isPlayer')?.value;
      this.shareDataService.setIsPlayer(isPlayer);

      console.log(`Nombre: ${inputValue}`);
      console.log(`Es administrador: ${isAdmin}`);
      console.log(`Es jugador: ${isPlayer}`);

      // Después de establecer los valores, navegar a la siguiente ruta
      this.router.navigate(['/table']);
    }
  }


}
