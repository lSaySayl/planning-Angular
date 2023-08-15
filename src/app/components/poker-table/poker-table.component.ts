import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-poker-table',
  templateUrl: './poker-table.component.html',
  styleUrls: ['./poker-table.component.scss']
})
export class PokerTableComponent implements OnInit {

  //Capturando input de la creación de sala
  inputCreateGame: string = '';
  inputCreatePlayer: string = '';
  isPlayer: boolean = false;

  //Propiedad para almacenar las cartas

  cards:any[] = []


  //Llamando mis servicios
  constructor(private sharedDataService: SharedDataService, private cardService: CardService) {}

  //utilizando el servicio compartido
  ngOnInit(): void {
    this.inputCreateGame = this.sharedDataService.getInputCreateGame();
    this.inputCreatePlayer= this.sharedDataService.getInputCreatePlayer();
    this.isPlayer = this.sharedDataService.getIsPlayer()
    this.cards = this.cardService.generateRandomCards()

  }

}
