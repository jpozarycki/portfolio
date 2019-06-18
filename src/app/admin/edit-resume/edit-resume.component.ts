import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../../shared/data-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-resume',
  templateUrl: './edit-resume.component.html',
  styleUrls: ['./edit-resume.component.css']
})
export class EditResumeComponent implements OnInit {
  resumeForm: FormGroup;
  resumeSubscription: Subscription;
  resumeLink: string;

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.dataStorageService.getResumeLink();
    this.resumeSubscription = this.dataStorageService.resumeLink.subscribe(
      data => {
        this.resumeLink = data.toString();
      }
    );
    this.resumeForm = new FormGroup({
      resume: new FormControl(null, [Validators.required])
    });
  }

  onSubmitResume() {
    console.log(this.resumeForm.value.resume);
    this.dataStorageService.uploadResume(this.resumeForm.value.resume);
  }
}
