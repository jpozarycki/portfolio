import {Component, OnInit} from '@angular/core';
import {Project} from '../projects/project.model';
import {DataStorageService} from '../shared/data-storage.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private projects: Project[] = [];
  resumeForm: FormGroup;
  resumeSubscription: Subscription;
  resumeLink: string;
  projectsForm: FormGroup;

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.projects = this.dataStorageService.getProjects();
    console.log(this.projects);
    this.dataStorageService.getResumeLink();
    this.resumeSubscription = this.dataStorageService.resumeLink.subscribe(
      data => {
        this.resumeLink = data.toString();
      }
    );
    this.resumeForm = new FormGroup({
      resume: new FormControl(null, [Validators.required])
    });
    this.initForm();
  }

  onSubmitResume() {
    console.log(this.resumeForm.value.resume);
    this.dataStorageService.uploadResume(this.resumeForm.value.resume);
  }

  get formData() {
    return this.projectsForm.get('technologies') as FormArray;
  }

  initForm() {
    let title = '';
    let pictureUrl = '';
    let description = '';
    let gitUrl = '';
    let webUrl = '';
    const technologies = new FormArray([]);

    title = this.projects[0].title;
    pictureUrl = this.projects[0].pictureUrl;
    description = this.projects[0].description;
    gitUrl = this.projects[0].gitLink;
    if (this.projects[0].webLink) {
      webUrl = this.projects[0].webLink;
    }
    for (const technology of this.projects[0].usedTechnologies) {
      technologies.push(
        new FormControl(technology)
      );
    }
    setTimeout(() => {
      this.projectsForm = new FormGroup({
        title: new FormControl(title),
        pictureUrl: new FormControl(pictureUrl),
        description: new FormControl(description),
        gitUrl: new FormControl(gitUrl),
        webUrl: new FormControl(webUrl),
        technologies
      });
    }, 200);
  }
}
