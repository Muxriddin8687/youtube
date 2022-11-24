import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';

@Component({
  selector: 'app-sort-buttons',
  templateUrl: './sort-buttons.component.html',
  styleUrls: ['./sort-buttons.component.scss']
})
export class SortButtonsComponent implements OnInit {

  constructor(public filtersService: FiltersService) { }

  ngOnInit(): void {
  }

}
