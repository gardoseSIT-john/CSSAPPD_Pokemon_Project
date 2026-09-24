import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Kanto } from './components/kanto/kanto';
import { Johto } from './components/johto/johto';

export const routes: Routes = [

//Home
{
    path : 'home',
    component: Home
},
//Kanto
{
    path: 'kanto',
    component: Kanto
},
// Johto
{
    path: 'johto',
    component: Johto
},

{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}


];
