import { Component, OnInit } from '@angular/core';
import {Project} from './project.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [trigger('cardAnimation', [
    state('startLoading', style({
      opacity: '0',
    })),
    state('finishLoading', style({
      opacity: '0.8'
    })),
    transition('startLoading => finishLoading', animate(600))
  ])]
})
export class ProjectsComponent implements OnInit {
  private projects: Project[] = [
    new Project(
      'First project',
      'https://via.placeholder.com/500',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus faucibus nisi sed ornare. Nulla tempus, enim quis accumsan rhoncus, dui dolor imperdiet augue, non finibus turpis purus a erat. Nam massa quam, condimentum non convallis in, blandit in dolor. ',
      ['Java', 'Angular', 'CSS3', 'MySQL'],
      'https://www.onet.pl',
      'https://github.com'),
    new Project(
      'First project',
      'https://via.placeholder.com/500',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus faucibus nisi sed ornare. Nulla tempus, enim quis accumsan rhoncus, dui dolor imperdiet augue, non finibus turpis purus a erat. Nam massa quam, condimentum non convallis in, blandit in dolor. ',
      ['Java', 'Angular', 'CSS3', 'MySQL'],
      'https://www.onet.pl',
      'https://github.com'),
    new Project(
      'First project',
      'https://via.placeholder.com/500',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus faucibus nisi sed ornare. Nulla tempus, enim quis accumsan rhoncus, dui dolor imperdiet augue, non finibus turpis purus a erat. Nam massa quam, condimentum non convallis in, blandit in dolor. ',
      ['Java', 'Angular', 'CSS3', 'MySQL'],
      'https://www.onet.pl',
      'https://github.com'),

    ];
  state = 'startLoading';
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.state = 'finishLoading';
    }, 100);
  }

}
