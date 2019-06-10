import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: []
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
  constructor() { }

  ngOnInit() {
  }

}
