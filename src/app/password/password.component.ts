import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'
import {Location} from '@angular/common'

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
    private _location: Location) { }

  ngOnInit() {
  }
  onCancel() {
    this._location.back();
  }
  changePassword() {
    this.authService.changePassword(this.passwords)
    .subscribe(
      res => {
        this.loading = false
      },
      error => {
        console.log(error)
        this.loading = false
      }
    )
  }
}
