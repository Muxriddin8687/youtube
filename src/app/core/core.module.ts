import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from './guards/auth.guard';
import { YoutubeModule } from '../youtube/youtube.module';

import { ContainerComponent } from './components/container/container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SortButtonsComponent } from './components/filters/sort-buttons/sort-buttons.component';
import { FilterInputComponent } from './components/filters/filter-input/filter-input.component';

const routes: Routes = [];

@NgModule({
    declarations: [
    ContainerComponent,
    NotFoundComponent,
    HeaderComponent,
    FiltersComponent,
    SortButtonsComponent,
    FilterInputComponent,
  ],
    imports: [
      CommonModule,
      HttpClientModule,
      AuthModule,
      YoutubeModule,
      RouterModule.forChild(routes),
    ],
    exports: [],
    providers: [ AuthGuard ],
})
export class CoreModule {}