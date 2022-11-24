import { Component, Input, OnInit } from '@angular/core';
import { RItems } from 'src/app/youtube/models/search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() item!: RItems;

  constructor() { }

  ngOnInit(): void {
  }

}
