import { Injectable } from '@angular/core';
import {Project} from '../projects/project.model';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import {Subject} from 'rxjs';

export interface ResumeData {
  link: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  resumeLink = new Subject<string>();
  private projects: Project[] = [
    new Project(
      'Exchange rate app',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-3ff69.appspot.com/o/rate_exchange.png?alt=media&token=c5bf0e85-66f3-468c-84b2-cb52e946a62e',
      'App that shows current exchange rate for a given pair of currencies, historical data (in time ranges from 1 week to 10 years, depends on available data and generates trendlines. If the trendline is descending, it is red. Otherwise it becomes green.',
      ['Angular', 'CSS3', 'REST API'],
      'https://github.com/jpozarycki/kainos-app',
      'https://0cgmodbi9j.execute-api.eu-central-1.amazonaws.com/production/'),
    new Project(
      'First project',
      'https://via.placeholder.com/500',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus faucibus nisi sed ornare. Nulla tempus, enim quis accumsan rhoncus, dui dolor imperdiet augue, non finibus turpis purus a erat. Nam massa quam, condimentum non convallis in, blandit in dolor. ',
      ['Java', 'Angular', 'CSS3', 'MySQL'],
      'https://github.com'),
    new Project(
      'First project',
      'https://via.placeholder.com/500',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus faucibus nisi sed ornare. Nulla tempus, enim quis accumsan rhoncus, dui dolor imperdiet augue, non finibus turpis purus a erat. Nam massa quam, condimentum non convallis in, blandit in dolor. ',
      ['Java', 'Angular', 'CSS3', 'MySQL'],
      'https://github.com'),

  ];
  projectsChanged = new Subject<Project[]>();
  // private resumeLink =
  //   // tslint:disable-next-line:max-line-length
  //   'https://firebasestorage.googleapis.com/v0/b/portfolio-3ff69.appspot.com/o/resume.pdf?alt=media&token=679deb5d-1618-4af5-b6ab-b04256820763';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.projects.slice();
  }

  // getResumeLink() {
  //   return this.resumeLink;
  // }

  uploadResume(link: string) {
    this.http.put('https://portfolio-3ff69.firebaseio.com/resume.json', {link}).subscribe(resData => {
      console.log(resData);
    });
  }

  getResumeLink() {
    this.http.get<ResumeData>('https://portfolio-3ff69.firebaseio.com/resume.json').pipe(map(resData => {
      return resData.link;
    })).subscribe(res => {
      this.resumeLink.next(res);
    });
  }

  updateProjects(id: number, newProject: Project) {
    this.projects[id] = newProject;
    this.projectsChanged.next(this.projects.slice());
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
    this.projectsChanged.next(this.projects.slice());
  }

  deleteProject(id: number) {
    this.projects.splice(id, 1);
    this.projectsChanged.next(this.projects.slice());
  }
}
