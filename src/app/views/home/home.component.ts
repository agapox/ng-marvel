import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroModel } from 'src/app/models/hero.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroes: Array<HeroModel>;
  totalHeroes: number = 0;

  constructor(
    private _heroeService: HeroesService,
    private route: Router
    ) { }

  ngOnInit() {
    this._heroeService.getHeroes().subscribe(
      (data: any) => {
        console.log(data);
        this.heroes = data.data.results;
        this.createPagination(Number(data.data.total));
      },
      (error) => {
        console.log(error);
      }
    )
  }

  showHeroeDetails(heroeId: number) {
    console.log(heroeId);
    this.route.navigate(['heroe', heroeId])
  }

  createPagination(totalHeroes: number) {
    console.log('createPagination');
    console.log(totalHeroes);
    let pagination = Math.ceil(totalHeroes/this.heroes.length);
    console.log('Pagination ', pagination);
  }
}
