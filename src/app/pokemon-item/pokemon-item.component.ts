import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonInterface } from '../pokemon-interface';
import { DisplayPokemonService } from '../display-pokemon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})

export class PokemonItemComponent implements OnInit, OnDestroy {

  constructor(private service:DisplayPokemonService, private route:ActivatedRoute
  ){}

  pokemonEnfant: PokemonInterface | undefined;
  pokemonDaTa!:Subscription

  ngOnInit(): void {
    this.selectedPokemon();
  }

  
  selectedPokemon(){
    this.route.params.subscribe(params => {
      this.service.fetchOne(params['id']).subscribe( data => {
        this.pokemonEnfant = data;
      })
    })
  }

  // Autre manière de faire

  /*   selectedPokemon(){
      const id = this.route.snapshot.paramMap.get('id')
      this.service.fetchOne(id).subscribe(
        data =>{
          this.pokemonEnfant = data;
        }
      )
    }
  */

    ngOnDestroy(): void {
      this.pokemonDaTa;
    }
}