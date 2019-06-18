import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('contentState', [
      state('invisible', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('invisible <=> visible', animate(600))
    ])
  ]
})
export class AboutMeComponent implements OnInit {
  icons = ['https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png',
    'https://www.javatpoint.com/images/hibernate/hibernate2.png',
    'https://img.icons8.com/ios/50/000000/api-settings-filled.png',
    'https://img.icons8.com/color/48/000000/angularjs.png',
    'https://img.icons8.com/color/48/000000/code-file.png',
    'https://img.icons8.com/color/48/000000/css3.png',
    'https://img.icons8.com/color/48/000000/bootstrap.png',
    'https://img.icons8.com/ios/50/000000/github-filled.png',
    'https://img.icons8.com/color/48/000000/linux.png',
    'https://img.icons8.com/color/48/000000/intellij-idea.png'
  ];
  state = 'invisible';

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.onAnimate();
    }, 100);
  }

  onAnimate() {
    this.state = 'visible';
  }
}
