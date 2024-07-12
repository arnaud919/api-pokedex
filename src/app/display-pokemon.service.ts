import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonInterface } from './pokemon-interface';

@Injectable({
  providedIn: 'root'
})

export class DisplayPokemonService {

  constructor(private http:HttpClient) { }

  url = "https://tyradex.tech/api/v1/pokemon";

  fetchAll(){
    return this.http.get<PokemonInterface[]>(this.url);
  }

  fetchOne(id:any){
    return this.http.get<PokemonInterface>(this.url+"/"+id)
  }
}
