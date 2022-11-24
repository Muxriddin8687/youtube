import { createReducer, on } from '@ngrx/store';
import { CardsModel } from 'src/app/youtube/models/card.model';
import { AddingCard, CardAction, CardActions } from '../actions/cards.action';


export const initialCardState: ReadonlyArray<CardsModel[]> = [];

// export const cardReducer = createReducer(
//     initialCardState,
//     on(cardsActions.addCard, (state, card) => ({
//       ...state,
//       cards: [...state.cards, card]
//     })),
// );

export function reducer (state: CardsModel=initialCardState, action: CardActions) {
  switch(action.type) {
    case CardAction.addCard:
      return Object.assign({}, state, itemList: [...state., action.payload])
  }
}