import {Component, OnInit} from '@angular/core';
import {aboutMeToOthers} from '../route-animation';
import {RouterOutlet} from '@angular/router';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
  animations: [aboutMeToOthers]
})
export class MoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getState(outletRef: RouterOutlet) {
    return {
      value: outletRef.activatedRouteData.animation
    };
  }

}
