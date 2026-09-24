import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Kanto } from './components/kanto/kanto';
import { Johto } from './components/johto/johto';
import { Hoenn } from './components/hoenn/hoenn';

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
//Hoenn
{
    path: 'hoenn',
    component: Hoenn
},

{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}


];
