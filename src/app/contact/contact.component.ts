import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('contentState', [
      state('invisible', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('invisible <=> visible', animate(800))
    ])
  ]
})
export class ContactComponent implements OnInit {
  state = 'invisible';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.onAnimate();
    }, 100);
  }

  onAnimate() {
    this.state = 'visible';
  }
}
