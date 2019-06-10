import {Component, OnInit} from '@angular/core';
import {slideInAnimation} from './route-animation';
import {LoginService} from './login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.autoLogin();
  }
}
