import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'
import { AlertService } from '../services/alert/alert.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  onRegister() {
    this.loading = true;
    this.authService.register(this.user)
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data.user))
          this.loading = false
        },
        error => {
          this.alertService.error("Registration failed. Please be sure passwords match or try again with another email.")
          this.loading = false
        },
        () => {
          this.authService.login(this.user)
          .subscribe(
            data => {
              localStorage.setItem('currentUser', JSON.stringify(data))
              this.loading = false
              this.router.navigate(['listings']);
            },
            error => {
              this.alertService.error(error)
              this.loading = false
            })}
      )
  }

}
