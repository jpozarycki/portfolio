import { Component, OnInit } from '@angular/core';
import {Project} from './project.model';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  private projects: Project[] = [];
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.projects = this.dataStorageService.getProjects();
  }

}
