import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.interface';
import { CardState } from 'src/app/state/reducers/card.reducers';

@Component({
  selector: 'app-select-cards',
  templateUrl: './select-cards.component.html',
  styleUrls: ['./select-cards.component.scss']
})
export class SelectCardsComponent implements OnInit {
  selectedCards$: Observable<Card[]>; //observables para mis cartas selecionadas
  cardCounts: { key: number, value: number }[] = []; // array de objetos para contar las cartas
  isRevealed = false; // variable para cambiar colores en las cartas
  isWaiting: boolean = false; //variable para esperar el conteo
  isGameStarted: boolean = false; //variable para ocultar boton y generar uno nuevo

  constructor(private store: Store<{ cardReducer: CardState }>) {
    this.selectedCards$ = store.select(state => state.cardReducer.selectedCards);
  }

  ngOnInit(): void {
    this.selectedCards$.subscribe(cards => {
      this.calculateCardCounts(cards);
    });
  }

  //funcion para contar las cartas repetidas


  calculateCardCounts(cards: Card[]): void {
    const tempCounts: Map<number, number> = new Map<number, number>();
    cards.forEach(card => {
      if (tempCounts.has(card.value)) {
        tempCounts.set(card.value, tempCounts.get(card.value)! + 1);
      } else {
        tempCounts.set(card.value, 1);
      }
    });

    this.cardCounts = Array.from(tempCounts).map(([key, value]) => ({ key, value }));
  }

  //función para calcular el promedio




  toggleButton(): void {
    this.isWaiting = true;
    this.isGameStarted = true;

    setTimeout(() => {
      this.isRevealed = !this.isRevealed;
      this.isWaiting = false;

    }, 2000);
  }

  //función para clases dinamicas:

  generateSelectedCardClass(index: number): string {
    return `selected-card-${index + 1}`;
  }



}
