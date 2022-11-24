import { createFeatureSelector } from '@ngrx/store';
import { IItems } from 'src/app/youtube/models/search-item.model';

export const selectDefault = createFeatureSelector<IItems[]>('defaultItems');