import { Type } from '@angular/core';

import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { CardsModel } from '../youtube/models/card.model';
import { IItems } from '../youtube/models/search-item.model';
import { RItems } from '../youtube/models/search-response.model';
import { DefaultItemsEffect } from './effects/youtube-default.effect';
import { SearchEffect } from './effects/youtube-search.effect';
import * as fromReducers from './reducers';


export interface State {
    cards: CardsModel[];
    search: IItems[];
    defaultItems: RItems[];
}



// export const reducers: ActionReducerMap<State> = {
//     cards: fromReducers.cards.reducer,
//     search: fromReducers.search.reducer,
//     defaultItems: fromReducers.defaultItems.reducer,
// };


export const effects = [ SearchEffect, DefaultItemsEffect ];
