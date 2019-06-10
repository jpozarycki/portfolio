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
      'Exchange rate app',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-3ff69.appspot.com/o/rate_exchange.png?alt=media&token=c5bf0e85-66f3-468c-84b2-cb52e946a62e',
      'App that shows current exchange rate for a given pair of currencies, historical data (in time ranges from 1 week to 10 years, depends on available data and generates trendlines. If the trendline is descending, it is red. Otherwise it becomes green.',
      ['Angular', 'CSS3', 'REST API'],
      'https://0cgmodbi9j.execute-api.eu-central-1.amazonaws.com/production/',
      'https://github.com/jpozarycki/kainos-app'),
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
