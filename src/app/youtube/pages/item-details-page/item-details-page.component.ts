import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItems } from 'src/app/youtube/models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RItems } from '../../models/search-response.model';

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.scss']
})
export class ItemDetailsPageComponent implements OnInit, OnDestroy {

  item: IItems[] | any = [];
  searchEvent: boolean = false;
  subscription!: Subscription;

  constructor(public youtubeService: YoutubeService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.youtubeService.getSearchEvent().subscribe(data => this.searchEvent = data);

    if(this.searchEvent) {
      this.subscription = this.youtubeService
                            .getOneSearchResult(id)
                            .subscribe(data => this.item = data);
    } else {
      this.subscription = this.youtubeService
                            .getOneDefultItem(id)
                            .subscribe(data => this.item = data);
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
