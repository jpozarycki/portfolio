import {Component, OnDestroy, OnInit} from '@angular/core';
import {Project} from '../../projects/project.model';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {DataStorageService} from '../../shared/data-storage.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit, OnDestroy {
  private projects: Project[] = [];
  projectsForm: FormGroup;
  editMode = false;
  id: number;
  projects$: Subscription;
  saved = false;
  deleted = false;


  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.projects$ = this.dataStorageService.projectsChanged.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
    this.projects = this.dataStorageService.getProjects();
    console.log(this.projects);
    this.initForm(0);
  }

  get formData() {
    return this.projectsForm.get('technologies') as FormArray;
  }

  initForm(index: number) {
    this.saved = false;
    this.deleted = false;
    this.id = index;
    let title = '';
    let pictureUrl = '';
    let description = '';
    let gitUrl = '';
    let webUrl = '';
    const technologies = new FormArray([]);

    if (index < this.projects.length) {
      this.editMode = true;
      title = this.projects[index].title;
      pictureUrl = this.projects[index].pictureUrl;
      description = this.projects[index].description;
      gitUrl = this.projects[index].gitLink;
      if (this.projects[index].webLink) {
        webUrl = this.projects[index].webLink;
      }
      for (const technology of this.projects[index].usedTechnologies) {
        technologies.push(
          new FormControl(technology)
        );
      }

    } else {
      this.editMode = false;
    }

    this.projectsForm = new FormGroup({
      title: new FormControl(title),
      pictureUrl: new FormControl(pictureUrl),
      description: new FormControl(description),
      gitUrl: new FormControl(gitUrl),
      webUrl: new FormControl(webUrl),
      technologies
    });

  }

  onAddTechnology() {
    (this.projectsForm.get('technologies') as FormArray).push(
      new FormControl(null)
    );
  }

  onSubmit() {
    const newProject = new Project(
      this.projectsForm.value.title,
      this.projectsForm.value.pictureUrl,
      this.projectsForm.value.description,
      this.projectsForm.value.technologies,
      this.projectsForm.value.gitUrl,
      this.projectsForm.value.webUrl
    );
    if (this.editMode) {
      this.dataStorageService.updateProjects(this.id, newProject);
    } else {
      this.dataStorageService.addProject(newProject);
    }
    this.saved = true;
  }

  onDeleteTechnology(index: number) {
    (this.projectsForm.get('technologies') as FormArray).removeAt(index);
  }

  onDeleteProject() {
    this.dataStorageService.deleteProject(this.id);
    this.deleted = true;
  }

  ngOnDestroy(): void {
    this.projects$.unsubscribe();
  }
}
