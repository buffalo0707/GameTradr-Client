import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'
import {Location} from '@angular/common'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertService } from '../services/alert/alert.service'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwords: any = {}
  loading = false;
  constructor(
    private authService: AuthService,
    private _location: Location,
    private alertService: AlertService,
  private router: Router,) { }

  ngOnInit() {
  }
  onCancel() {
    this._location.back();
  }
  changePassword() {
    this.authService.changePassword(this.passwords)
    .subscribe(
      res => {
        this.alertService.error("Password changed successfully :)")
        this.loading = false
      },
      error => {
        this.alertService.error("Password not changed! Check your password and try again.")
        this.loading = false
      }
    )
  }
}
