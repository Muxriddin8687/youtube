import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, BehaviorSubject } from 'rxjs';
import { IItems } from 'src/app/youtube/models/search-item.model';
import { RItems } from '../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private defultItems$$: BehaviorSubject<IItems[]> = new BehaviorSubject<IItems[]>([]);
  private searchItems$$: BehaviorSubject<RItems[]> = new BehaviorSubject<RItems[]>([]);
  private searchEvent$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getSearchItems(val: string){
    return this.http.get(`search&q=${val}`);
  }

  getDefaultItem(){
    return this.http.get('videos&');
  }









  searchEventActived() {
    this.searchEvent$$.next(true);
  }


  searchEventDisabled() {
    this.searchEvent$$.next(false);
  }


  getSearchEvent() {
    return this.searchEvent$$.asObservable();
  }





  searchFromYoutube(val: string) {
    this.http
      .get(`search&q=${val}`)
      .subscribe((result: any) => {
        this.searchItems$$.next(result.items);
      });
  }


  getSearchResult() {
    return this.searchItems$$.asObservable();
  }


  getOneSearchResult(id: string) {
    return this.searchItems$$
      .pipe(
        map(val =>
          val.filter(item => item.id.videoId === id)
        )
      );
  }





  getDefaultItems(): Observable<IItems[]> {
    return this.defultItems$$.asObservable();
  }


  setDefaultItems() {
    this.http
      .get('videos&')
      .subscribe((res: any) =>
        this.defultItems$$.next(res.items)
      );
  }


  getOneDefultItem(id: string) {
    return this.defultItems$$
      .pipe(
        map(val =>
          val.filter(item => item.id === id)
        )
      );
  }

}
