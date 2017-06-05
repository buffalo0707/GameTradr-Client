import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwords: any = {}
  loading = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  changePassword() {
    console.log('in comp')
    this.authService.changePassword(this.passwords)
    .subscribe(
      res => {
        console.log(res)
        this.loading = false
      },
      error => {
        console.log(error)
        this.loading = false
      }
    )
  }
}
