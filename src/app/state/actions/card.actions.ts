//Importando nuestros metodos iniciales para iniciar una acción
import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/core/models/card.interface';

export const updateCard = createAction(
  '[Card] Update Card', //Nombre de mi acción, siempre debe existir, el props es opcional.
  props<{ card: Card }>()
);


/* export const selectCardNumber = createAction(
  '[Card] Select Card Number',
  props<{ cardNumber: number }>()
);
 */

