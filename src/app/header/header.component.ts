import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/service/login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private resumeLink =
    // tslint:disable-next-line:max-line-length
    'https://firebasestorage.googleapis.com/v0/b/portfolio-3ff69.appspot.com/o/resume.pdf?alt=media&token=679deb5d-1618-4af5-b6ab-b04256820763';
  private isAuthenticated = false;
  private userSub: Subscription;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userSub = this.loginService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.loginService.logOut();
  }
}
