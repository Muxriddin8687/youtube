import { createReducer } from "@ngrx/store";
import { RItems } from "src/app/youtube/models/search-response.model";
 
export const initialState: ReadonlyArray<RItems> = [];
 
export const searchReducer = createReducer(
    initialState
);