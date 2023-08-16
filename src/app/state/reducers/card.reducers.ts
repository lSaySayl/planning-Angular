import { createReducer,on } from "@ngrx/store"; //importando el reducer
import { updateCard } from '../actions/card.actions';
import { Card } from "src/app/core/models/card.interface";

export interface CardState {
  cards: Card[];
  selectedCards: Card[]; // Nuevo campo

}


//Estado inicial. Similar a inicializar mis variables.
const initialState: CardState = {
  cards:[],
  selectedCards: [] // Inicialización del nuevo campo

}

//Creando nuestro reducer. "Funciones puras"
export const cardReducer = createReducer(
  initialState, //Lo primero que hace es revisar el estado inicial y luego escucha las acciones. pueden tener muchas (on)
  //el state hace referencia a mi estado actual, antes de que se cambie.
  on(updateCard, (state, { card }) => {
    const updatedCards = state.cards.map(existingCard =>
      existingCard.ownerId === card.ownerId ? card : existingCard
    );
    return { ...state, cards: updatedCards, selectedCards: [...state.selectedCards, card] }; // Agregar la carta seleccionada
  })


//spread operator para crear un clon de mi estado,
)
