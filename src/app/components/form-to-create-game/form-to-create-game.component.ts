import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-form-to-create-game',
  templateUrl: './form-to-create-game.component.html',
  styleUrls: ['./form-to-create-game.component.scss'],
})
export class FormToCreateGameComponent {
  //Creación de mi formulario
  public formToCreateGame: FormGroup;

  //
  constructor(private FormBuilder: FormBuilder, private shareDataService: SharedDataService) {
    this.formToCreateGame = this.initializeFormToCreateGame();
  }

  //Metodo para declarar las propiedades de mi formulario, campos y validaciones
  public initializeFormToCreateGame(): FormGroup {
    return this.FormBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^(?=(?:[^0-9]*[0-9]){0,3}[^0-9]*$)/)
        ],
      ],
    });
  }

  public captureData(): void {
    console.log(this.formToCreateGame.value.name);
    if (this.formToCreateGame.valid) {
      const inputCreateGame = this.formToCreateGame.get('name')?.value;
      this.shareDataService.setInputCreateGame(inputCreateGame)
    }
  }

  //Modal

  //Variable switch
  show: boolean = false;

  //Método condicionado para accionar mi modal

  public openModal(): void {
    if (this.formToCreateGame.valid) {
      this.show = true;
    }
  }
}
