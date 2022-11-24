import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ItemDetailsPageComponent } from './pages/item-details-page/item-details-page.component';
import { AddCardComponent } from './pages/admin/add-card/add-card.component';

const routes: Routes = [
    { path: '', component: ListPageComponent },
    { path: 'item/:id', component: ItemDetailsPageComponent },
    { path: 'admin/add-card', component: AddCardComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YoutubeRoutingModule {}
