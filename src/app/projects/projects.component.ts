import {Component, OnDestroy, OnInit} from '@angular/core';
import {Project} from './project.model';
import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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
export class ProjectsComponent implements OnInit, OnDestroy {
  state = 'invisible';
  private projects: Project[] = [];
  projects$: Subscription;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getResumeLink();
    this.projects$ = this.dataStorageService.projectsChanged.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
    this.projects = this.dataStorageService.getProjects();
    setTimeout(() => {
      this.onAnimate();
    }, 100);
  }

  ngOnDestroy(): void {
    this.projects$.unsubscribe();
  }

  onAnimate() {
    this.state = 'visible';
  }
}
