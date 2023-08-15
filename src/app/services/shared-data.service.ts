import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {

  //Capturando input de la creación de sala
  private inputCreateGame: string = '';

  setInputCreateGame(value: string): void {
    this.inputCreateGame = value;
  }

  getInputCreateGame(): string {
    return this.inputCreateGame;
  }

  //Capturando input la creación de jugador
  private inputValue: string = '';

  setInputCreatePlayer(value: string): void {
    this.inputValue = value;
  }

  getInputCreatePlayer(): string {
    return this.inputValue;
  }

  //Rastrear si el usuario es un jugador o un espectador.
  private isPlayer: boolean = false;

  setIsPlayer(value: boolean): void {
    this.isPlayer = value;
  }

  getIsPlayer(): boolean {
    return this.isPlayer;
  }




}
