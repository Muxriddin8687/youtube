import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {
  constructor(public filtersService: FiltersService) { }

  ngOnInit(): void {
  }

  saveFilterValue(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.filtersService.filterInputValue = e.target.value;
    }
  }

}
