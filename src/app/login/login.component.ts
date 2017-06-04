import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}
  loading = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('login')
    this.loading = true;
    this.authService.login(this.user)
      .subscribe(
        user => {
          console.log(user)
          localStorage.setItem('currentUser', JSON.stringify(user))
          console.log('currentuser is', localStorage.getItem('currentUser'))
          this.loading = false
        },
        error => {
          console.log(error)
          this.loading = false
        }
      )
  }
}
