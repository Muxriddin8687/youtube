import { Component, OnInit } from '@angular/core';
import { IItems } from 'src/app/youtube/models/search-item.model';
import { FiltersService } from 'src/app/core/services/filters.service';
import { YoutubeService } from '../../services/youtube.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  items$$: Observable<IItems[] | any> = new Observable<IItems[] | any>();

  constructor(
    public youtubeService: YoutubeService,
    public filtersService: FiltersService,
  ) { }

  ngOnInit(): void {
    this.items$$ = this.youtubeService.getDefaultItems();
  }

  getFilterInputValue() {
    return this.filtersService.filterInputValue;
  }

  getSortByValue() {
    return this.filtersService.sortBy;
  }

}
