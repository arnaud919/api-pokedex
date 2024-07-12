import { Routes } from '@angular/router';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { Error404Component } from './error-404/error-404.component';

export const routes: Routes = [
    {path: '', component: DisplayDataComponent},
    {path: 'pokemon/:id', component:PokemonItemComponent},
    {path: '**', component:Error404Component}
];