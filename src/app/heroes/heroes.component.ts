import {Component, OnInit} from '@angular/core';
import {Hero} from '../heroes/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _hero: Hero = {
    id: 1,
    name: 'chiến'
  };

  constructor() {
  }

  ngOnInit(): void {
  }


  get hero(): Hero {
    return this._hero;
  }

  set hero(value: Hero) {
    this._hero = value;
  }
}
