
import { Component, OnInit, SimpleChanges, Input, SimpleChange, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  @Input('newHero')
  newHero!: Hero;
  @Input('childTitle')
  title!: string;

  constructor(private ref: ChangeDetectorRef) {
    console.log(`constructor invoked data is ${this.newHero}`);
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);    
    // for (let key in changes) {
    //   console.log(`${key} changed. 
    //   Current: ${JSON.stringify(changes[key].currentValue)}. 
    //   }`);
    // }
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${JSON.stringify(this.newHero)}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }
}