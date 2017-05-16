import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Heroe} from '../../models/heroe.model';
//import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-search',
  templateUrl: 'heroes-search.component.html'
})
export class HeroesSearchComponent implements OnInit {

  private heroes: Heroe[] = [];
  private termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
      activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.searchHeroes(this.termino);
    });
  }

  ngOnInit() {
  }

  verHeroe(i: number) {

  }

}
