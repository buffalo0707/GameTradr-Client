import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router) { }

  loggedIn() {
    return localStorage.getItem('currentUser') !== null
  }

  onLogout() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.authService.logout(currentUser.user)
    .subscribe(
      data => {
        localStorage.clear()
        this.router.navigate(['home']);
      },
      error => {
        console.log(error)
      }
    )
  }
}
