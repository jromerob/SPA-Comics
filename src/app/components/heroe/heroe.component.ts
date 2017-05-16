import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../services/heroes.service';
import { Heroe} from '../../models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  private heroe: Heroe ;

  constructor(activatedRoute: ActivatedRoute, heroesService: HeroesService) {

    activatedRoute.params.subscribe(params => {
      this.heroe = heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

}
