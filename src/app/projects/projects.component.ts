import {Component, OnDestroy, OnInit} from '@angular/core';
import {Project} from './project.model';
import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private projects: Project[] = [];
  projects$: Subscription;
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getResumeLink();
    this.projects$ = this.dataStorageService.projectsChanged.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
    this.projects = this.dataStorageService.getProjects();
  }

  ngOnDestroy(): void {
    this.projects$.unsubscribe();
  }

}
