import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/service/login.service';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private resumeLink: string;
  private isAuthenticated = false;
  private userSub: Subscription;

  constructor(private loginService: LoginService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.userSub = this.loginService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.resumeLink = this.dataStorageService.getResumeLink();
  }

  onLogout() {
    this.loginService.logOut();
  }
}
