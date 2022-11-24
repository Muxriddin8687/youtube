import { Pipe, PipeTransform } from '@angular/core';
import { IItems } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'sorting',
})

export class SortingPipe implements PipeTransform {
  transform(items: IItems[], value: string) {
    const [sortName, sortParam] = value.split(':');
    if (sortName === 'view') {
      if (sortParam !== 'viewDown') {
        items.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
      } else {
        items.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
      }
    } else if (sortName === 'date') {
      if (sortParam !== 'dateDown') {
        items.sort((a, b) => {
          const first = new Date(a.snippet.publishedAt).getTime();
          const second = new Date(b.snippet.publishedAt).getTime();
          return first - second;
        });
      } else {
        items.sort((a, b) => {
          const first = new Date(a.snippet.publishedAt).getTime();
          const second = new Date(b.snippet.publishedAt).getTime();
          return second - first;
        });
      }
    }
    return items;
  }
}
