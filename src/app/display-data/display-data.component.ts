import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DisplayPokemonService } from '../display-pokemon.service';
import { PokemonInterface } from '../pokemon-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})

export class DisplayDataComponent implements OnInit {

  constructor(private service: DisplayPokemonService){}

  pokemons:PokemonInterface[]=[];

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.service.fetchAll().subscribe(data =>{
      this.pokemons = data;
    })
  }
}