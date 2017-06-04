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

  onLogout() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.authService.logout(currentUser.user)
    .subscribe(
      data => {
        this.router.navigate(['home']);
      },
      error => {
        console.log(error)
      }
    )
  }
}
