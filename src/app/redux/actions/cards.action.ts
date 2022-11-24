import { Action } from '@ngrx/store';
import { CardsModel } from 'src/app/youtube/models/card.model';

export enum CardAction {
    addCard = '[Card Add] Add'
}

export class AddingCard implements Action {
    readonly type = CardAction.addCard;

    constructor(public payload: CardsModel) { }
}


export type CardActions = AddingCard;