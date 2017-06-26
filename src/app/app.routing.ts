import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { FormationComponent } from './formation/formation.component'; //import home components

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formation', component: FormationComponent},
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);