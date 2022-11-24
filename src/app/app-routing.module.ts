import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ContainerComponent } from './core/components/container/container.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
            },
            {
                path: 'main',
                loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
                canLoad: [AuthGuard]
            },
            { path: '404', component: NotFoundComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', redirectTo: '404' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
