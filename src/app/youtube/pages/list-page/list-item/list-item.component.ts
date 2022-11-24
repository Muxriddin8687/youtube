import { Component, Input, OnInit } from '@angular/core';
import { IItems } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: IItems | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
