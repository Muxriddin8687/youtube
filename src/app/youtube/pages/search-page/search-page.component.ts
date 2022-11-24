import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RItems } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchItems$$: Observable<RItems[] | any> = new Observable<RItems[] | any>();

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.searchItems$$ = this.youtubeService.getSearchResult();
  }

}
