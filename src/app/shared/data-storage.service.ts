import { Injectable } from '@angular/core';
import {Project} from '../projects/project.model';
import {HttpClient} from '@angular/common/http';
import {map, take, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

export interface ResumeData {
  link: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  resumeLink = new Subject<string>();

  private projects: Project[] = [];
  projectsChanged = new Subject<Project[]>();

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.projects.slice();
  }

  saveProjects() {
    const projects = this.getProjects();
    this.http.put('https://portfolio-3ff69.firebaseio.com/projects.json', projects).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchProjects() {
    return this.http.get<Project[]>('https://portfolio-3ff69.firebaseio.com/projects.json?').pipe(tap(recipes => {
      this.setProjects(recipes);
    }));
  }

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

  setProjects(projects: Project[]) {
    this.projects = projects;
    this.projectsChanged.next(this.projects.slice());
  }

  updateProjects(id: number, newProject: Project) {
    this.projects[id] = newProject;
    this.projectsChanged.next(this.projects.slice());
    this.saveProjects();
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
    this.projectsChanged.next(this.projects.slice());
    this.saveProjects();
  }

  deleteProject(id: number) {
    this.projects.splice(id, 1);
    this.projectsChanged.next(this.projects.slice());
  }
}
