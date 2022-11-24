import { createReducer } from "@ngrx/store";
import { IItems } from "src/app/youtube/models/search-item.model";
 
export const initialState: ReadonlyArray<IItems> = [];
 
export const defaultReducer = createReducer(
    initialState
);