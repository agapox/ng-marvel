import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  BASEURL: string = 'http://gateway.marvel.com';
  APIKEY: string = '61c7e114cd9c1038685b872564b86355';
  keyUrl: string = `?apikey=${this.APIKEY}`;

  constructor(private httpClient: HttpClient) { }

  getHeroes() {
    const resource = '/v1/public/characters';
    const url = `${this.BASEURL}${resource}${this.keyUrl}`;
    return this.httpClient.get(url);
  }

  getHero(heroId: number) {
    const resource = '/v1/public/characters';
    const url = `${this.BASEURL}${resource}/${heroId}${this.keyUrl}`;
    return this.httpClient.get(url);
  }
  // getHeroComics(heroeId: string) {
  //   this.resource = 'characters';
  //   this.resourceId = `/${heroeId}`;
  //   return this.httpClient.get(`${this.requestURL}/comics`);
  // }
}
