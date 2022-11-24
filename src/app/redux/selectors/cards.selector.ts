import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsModel } from 'src/app/youtube/models/card.model';


export interface CardState {
    cards: CardsModel[];
}

export const initialState: CardState = {
    cards: [],
}

export const selectCards = createFeatureSelector<CardsModel[]>('cardItems');
export const getCards = createSelector(
    selectCards,
    (state: CardState) => state.cards
);
