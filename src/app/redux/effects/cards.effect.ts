import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as cardsActions from '../actions/cards.action';

@Injectable({
    providedIn: 'root'
})
export class NameEffects {
    constructor(private actions$: Actions) {}

    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(cardsActions.addCard),
        ),
    );
}