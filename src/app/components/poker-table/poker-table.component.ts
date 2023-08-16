import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Card } from 'src/app/core/models/card.interface';
/* import { CardService } from 'src/app/services/card.service'; */
import { SharedDataService } from 'src/app/services/shared-data.service';
import { updateCard } from 'src/app/state/actions/card.actions';
import { CardState } from 'src/app/state/reducers/card.reducers';

@Component({
  selector: 'app-poker-table',
  templateUrl: './poker-table.component.html',
  styleUrls: ['./_poker-table.component.scss'],
})
export class PokerTableComponent {


  //Capturando input de la creación de sala
  inputCreateGame: string = '';
  inputCreatePlayer: string = '';
  isPlayer: boolean = false;
  /* selectedCardValues: number[] = []; */

  //Propiedad para almacenar las cartas

  cards: any[] = [];

  // Propiedad para almacenar las cartas seleccionadas por los jugadores
  selectedCards: Card[] = [];

  //Llamando mis servicios
  constructor(
    private sharedDataService: SharedDataService,
    private store: Store<{ cardReducer: CardState }>,
    private router: Router
  ) {}

  //utilizando el servicio compartido
  ngOnInit(): void {
    this.inputCreateGame = this.sharedDataService.getInputCreateGame();
    this.inputCreatePlayer = this.sharedDataService.getInputCreatePlayer();
    this.isPlayer = this.sharedDataService.getIsPlayer();
    /*  this.cards = this.cardService.generateRandomCards(); */

    // Generar las cartas iniciales si es un espectador
    if (this.isPlayer) {
      this.cards = this.generateRandomCards(12);
    }
    console.log(this.cards);
  }

   // Función para generar cartas aleatorias
   generateRandomCards(numberOfCards: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < numberOfCards; i++) {
      const randomValue = Math.floor(Math.random() * 50) + 1;
      const card: Card = { value: randomValue, ownerId: '' };
      cards.push(card);
    }
    return cards;
  }

  //Función para seleccionar cartas en la parte de jugadores y luego redirigir a lo que sería el admin.

  chooseCard(chosenCard: Card) {
    /* chosenCard.ownerId = this.inputCreatePlayer; */
    this.selectedCards.push(chosenCard); // Almacenar la carta seleccionada en el estado
    this.store.dispatch(updateCard({ card: chosenCard })); //Despachamos
    console.log('Cartas seleccionadas:', this.selectedCards);
    if (this.selectedCards.length === 7) {
      this.router.navigate(['/admin']);
    }
  }


  //Clase dinámica para las cartas en mesa redonda para jugador
  calculateCardClass(position: number): string {
    return `card-${position}`;
  }





}

