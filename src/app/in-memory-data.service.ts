import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: '平凡的世界' },
      { id: 2, name: '格林童话' },
      { id: 3, name: '哈利波特' },
      { id: 4, name: '纸牌屋' },
      { id: 5, name: '本草纲目' },
      { id: 6, name: '十万个为什么' },
      { id: 7, name: '红高粱' },
      { id: 8, name: '趣味数学' },
      { id: 9, name: '山海经' },
      { id: 10, name: '史记' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}