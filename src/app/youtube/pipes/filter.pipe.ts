import { Pipe, PipeTransform } from '@angular/core';
import { IItems } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: IItems[], value: string) {
    if (items && value) {
      items = items.filter((item) => item.snippet.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      return items;
    }
    return items;
  }
}
