import { TestBed } from '@angular/core/testing';

import { DisplayPokemonService } from './display-pokemon.service';

describe('DisplayPokemonService', () => {
  let service: DisplayPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
