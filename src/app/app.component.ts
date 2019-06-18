import {Component, OnInit} from '@angular/core';
import {mainToOthers} from './route-animation';
import {LoginService} from './login/service/login.service';
import {DataStorageService} from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [mainToOthers]
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.loginService.autoLogin();
    this.dataStorageService.fetchProjects().subscribe();
    this.dataStorageService.getResumeLink();
  }
}
