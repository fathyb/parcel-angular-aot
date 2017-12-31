import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './shared/components/home/home.module#HomeModule' },
    { path: 'lazy', loadChildren: './shared/components/lazy/lazy.module#LazyModule' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

