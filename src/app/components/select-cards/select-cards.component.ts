import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.interface';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { clearSelectedCards } from 'src/app/state/actions/card.actions';
import { CardState } from 'src/app/state/reducers/card.reducers';

@Component({
  selector: 'app-select-cards',
  templateUrl: './select-cards.component.html',
  styleUrls: ['./select-cards.component.scss']
})
export class SelectCardsComponent implements OnInit {
  selectedCards$: Observable<Card[]>; //observable para mis cartas selecionadas
  cardCounts: { key: number, value: number }[] = []; // array de objetos para contar las cartas
  isRevealed = false; // variable para cambiar colores en las cartas
  isWaiting: boolean = false; //variable para esperar el conteo
  isGameStarted: boolean = false; //variable para ocultar boton y generar uno nuevo
  show: boolean = false; //variable para mostrar modal
  inputCreateGame: string = '';
  inputCreatePlayer: string = '';

  constructor(
    private store: Store<{ cardReducer: CardState }>,
    private sharedDataService: SharedDataService,
    private router: Router

    ) {
    this.selectedCards$ = store.select(state => state.cardReducer.selectedCards);
  }


  ngOnInit(): void {
    this.inputCreateGame = this.sharedDataService.getInputCreateGame();
    this.inputCreatePlayer = this.sharedDataService.getInputCreatePlayer();
    this.selectedCards$.subscribe(cards => {
      this.calculateCardCounts(cards);
    });
  }


  //funcion para contar las cartas repetidas
  calculateCardCounts(cards: Card[]): void {
    const tempCounts: Map<number, number> = new Map<number, number>();
    let totalSum = 0; // Para almacenar la suma total de valores

    cards.forEach(card => {
      if (tempCounts.has(card.value)) {
        tempCounts.set(card.value, tempCounts.get(card.value)! + 1);
      } else {
        tempCounts.set(card.value, 1);
      }

      totalSum += card.value; // Agregar el valor de la tarjeta a la suma total
    });

    this.cardCounts = Array.from(tempCounts).map(([key, value]) => ({ key, value }));
    this.calculateAverage(totalSum, cards.length); // Calcular el promedio
  }

  averageValue: number = 0; //


  //función para calcular el promedio

  calculateAverage(totalSum: number, totalCount: number): void {
    if (totalCount > 0) {
      this.averageValue = totalSum / totalCount; // Calcular el promedio
    } else {
      this.averageValue = 0; // Si no hay tarjetas, el promedio es 0
    }
  }


  revealCards(): void {
    this.isWaiting = true;
    setTimeout(() => {
      this.isRevealed = !this.isRevealed;
      this.isWaiting = false;
      this.isGameStarted = true;
    }, 4000);
  }

  newVote(): void {
    // Dispatch la acción para borrar las cartas seleccionadas
    this.store.dispatch(clearSelectedCards());
    this.isGameStarted = true;
    this.isWaiting = true;

    setTimeout(() => {

      this.router.navigate(['/table']);
    }, 2000);
  }


  //función para clases

  generateCardClass(index: number): string {
    return 'card-' + index;
  }

  getCardTransitionDelay(index: number): string {
    const delay = index * 0.3; //Valor del retraso
    return `${delay}s`;
  }


  modalGame(): void {
    this.show = true;
  }

  closeModalGame(): void {
    this.show = false;
  }





}
