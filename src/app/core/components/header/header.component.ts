import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, pluck, tap } from 'rxjs';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { FiltersService } from '../../services/filters.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inputValue') searchInput!: ElementRef;
  private min_length_search_value = 3;

  constructor(private filtersService: FiltersService,
              private youtubeService: YoutubeService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.youtubeService.setDefaultItems();
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchInput!.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((val: any) => {
          if(`${val}`.trim().length > this.min_length_search_value) {
            this.youtubeService.searchEventActived();
            return true;
          } else {
            this.youtubeService.searchEventDisabled();
            return false;
          }
        }),
        tap(val => val),
        untilDestroyed(this),
      )
      .subscribe(res => {
        this.youtubeService.searchFromYoutube(res);
      });
  }



  ngOnDestroy(): void { }




  logOut() {
    localStorage.removeItem('auth');
    this.router.navigate(['login']);
  }



  toggleFilters() {
    this.filtersService.changeFiltersStatus();
  }

}
