import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../../shared/data-storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-edit-resume',
  templateUrl: './edit-resume.component.html',
  styleUrls: ['./edit-resume.component.css'],
  animations: [
    trigger('contentState', [
      state('invisible', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('invisible <=> visible', animate(200))
    ])
  ]
})
export class EditResumeComponent implements OnInit {
  resumeForm: FormGroup;
  resumeSubscription: Subscription;
  resumeLink: string;
  state = 'invisible';

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.initForm();
    setTimeout(() => {
      this.onAnimate();
    }, 100);
  }
  onAnimate() {
    this.state = 'visible';
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
