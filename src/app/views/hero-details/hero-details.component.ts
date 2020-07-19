import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  heroId: number;
  hero: HeroModel;
  isHeroServiceError: boolean = false;

  constructor(
    private _heroService: HeroesService,
    private location: Location,
    private activatedRoute: ActivatedRoute
    ) {

    }

  ngOnInit() {
    this.heroId = Number(this.activatedRoute.snapshot.params.heroId);
    this._heroService.getHero(this.heroId).subscribe(
      (data: any) => {
        this.hero = data.data.results[0];
        console.log(this.hero);
      },
      (error) => {
        this.isHeroServiceError = true;
        console.log(error)
      }
    );
  }

  goback() {
    this.location.back();
  }

}
