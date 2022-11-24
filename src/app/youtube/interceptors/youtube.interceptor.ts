import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  private api = environment.youtube_api;
  private key = environment.youtube_key;


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = request;
    let paramKey = new HttpParams().set('key', this.key);
    switch (true) {
      case request.url.startsWith('search'):
        const paramSearch = new HttpParams().set('part', 'snippet').set('type', 'video').set('maxResult', '12');
        const startUrlSearch = this.getChunksUrl(request.url).startUrl;
        const endUrlSearch = this.getChunksUrl(request.url).endUrl;

        newRequest = request.clone({
          url: `${this.api}${startUrlSearch}?${paramKey}${endUrlSearch}&${paramSearch}`,
        });
        return next.handle(newRequest as HttpRequest<string>);

      case request.url.startsWith('videos'):
        const paramVideos = new HttpParams().set('part', 'snippet,statistics').set('chart', 'mostPopular').set('maxResults', '2');
        const startUrlVideos = this.getChunksUrl(request.url).startUrl;
        const endUrlVideos = this.getChunksUrl(request.url).endUrl;

        newRequest = request.clone({
          url: `${this.api}${startUrlVideos}?${paramKey}${endUrlVideos}${paramVideos}`,
        });
        return next.handle(newRequest as HttpRequest<string>);

      default:
        return next.handle(request);
    }
  }

  getChunksUrl(url: string) {
    const startUrl = url.slice(0, url.indexOf('&'));
    const endUrl = url.slice(url.indexOf('&'));
    return { startUrl, endUrl };
  }
}
