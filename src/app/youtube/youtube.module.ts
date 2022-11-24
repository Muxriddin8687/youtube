import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeInterceptor } from './interceptors/youtube.interceptor';
import { DateColorDirective } from './directives/date-color.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortingPipe } from './pipes/sorting.pipe';

import { ItemDetailsPageComponent } from './pages/item-details-page/item-details-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ListItemComponent } from './pages/list-page/list-item/list-item.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchItemComponent } from './pages/search-page/search-item/search-item.component';
import { AddCardComponent } from './pages/admin/add-card/add-card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ItemDetailsPageComponent,
    ListPageComponent,
    ListItemComponent,
    FilterPipe,
    SortingPipe,
    DateColorDirective,
    SearchPageComponent,
    SearchItemComponent,
    AddCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YoutubeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true }
  ],
})
export class YoutubeModule { }