import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-heroes-list',
  template: `
    <div style="background-color:#5547e6;padding:20px;">
      <input type="text" [(ngModel)]="childTitle" placeholder="Enter  title" /><br/>
      <button type="button" class="success" (click)="addNewHero()">
        Add title
      </button><br/>
      <input type="text" [(ngModel)]="name" placeholder="Name" /><br/>
      <input type="text" [(ngModel)]="superPower" placeholder="Super Power" /><br/>
      <button type="button" class="success" (click)="addNewHero()">
        Add new hero
      </button>
      <hero [newHero]="newHero" [childTitle]="childTitle"></hero>
    </div>
  `,
  styles: ['.success { background-color: #30e930;border:none;margin:5px; }'],
})
export class HeroesListComponent implements OnInit {
  newHero: Hero = new Hero('', '');
  childTitle = 'Hero component';
  name: string = '';
  superPower: string = '';
  constructor() {}
  ngOnInit(): void {}
  addNewHero() {
    this.newHero.name = this.name;
    this.newHero.superPower = this.superPower;
  }
}