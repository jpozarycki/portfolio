import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../login/service/login.service';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private resumeLink: string;
  private isAuthenticated = false;
  private resume$: Subscription;
  private user$: Subscription;

  constructor(private loginService: LoginService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.user$ = this.loginService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.resume$ = this.dataStorageService.resumeLink.subscribe(resume => {
      console.log(resume);
      this.resumeLink = resume;
    });
  }

  onLogout() {
    this.loginService.logOut();
  }

  ngOnDestroy(): void {
    this.resume$.unsubscribe();
    this.user$.unsubscribe();
  }
}
