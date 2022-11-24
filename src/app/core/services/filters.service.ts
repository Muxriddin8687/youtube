import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public filtersIsActive: boolean = false;

  public filterInputValue: string = '';

  public sortBy: string = ':';

  constructor() { }

  changeFiltersStatus() {
    this.filtersIsActive = !this.filtersIsActive;
  }

  sortByView() {
    const [sortName, sortParam] = this.sortBy.split(':');
    if (sortName !== 'view') {
      this.sortBy = 'view:viewUp';
    } else {
      this.sortBy = sortParam === 'viewUp' ? 'view:viewDown' : 'view:viewUp';
    }
  }

  sortByDate() {
    const [sortName, sortParam] = this.sortBy.split(':');
    if (sortName !== 'date') {
      this.sortBy = 'date:dateUp';
    } else {
      this.sortBy = sortParam === 'dateUp' ? 'date:dateDown' : 'date:dateUp';
    }
  }
}
