import { createFeatureSelector } from '@ngrx/store';
import { RItems } from 'src/app/youtube/models/search-response.model';

export const selectSearch = createFeatureSelector<RItems[]>('searchItems');