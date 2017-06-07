import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'
import { AlertService } from '../services/alert/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}
  loading = false;
  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private _location: Location) { }

  ngOnInit() {
    this.user = {}
  }
  onCancel() {
    this._location.back();
  }
  onLogin() {
    this.loading = true;
    this.authService.login(this.user)
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data))
          this.loading = false
          this.router.navigate(['listings']);
        },
        error => {
          this.alertService.error("Login failed. Please check your username and password.")
          this.loading = false
        }
      )
  }
}
