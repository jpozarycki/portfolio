import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './service/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.required])
      })
    });
  }

  onSubmit() {
    this.isLoading = true;
    console.log(this.loginForm);
    this.loginService.login(this.loginForm.value.userData.email, this.loginForm.value.userData.password).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['more/admin'], {relativeTo: this.route.parent});
      }
    );
  }
}
