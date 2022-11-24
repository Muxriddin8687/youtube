import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {
  @Output() filterInput = new EventEmitter();

  constructor(public filtersService: FiltersService) { }

  ngOnInit(): void {
  }

}
