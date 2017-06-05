import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router) { }

  ngOnInit() {
    this.user = {}
  }

  onLogin() {
    console.log('login')
    this.loading = true;
    this.authService.login(this.user)
      .subscribe(
        data => {
          console.log(data)
          localStorage.setItem('currentUser', JSON.stringify(data))
          console.log('currentuser is', localStorage.getItem('currentUser'))
          this.loading = false
          this.router.navigate(['listings']);
        },
        error => {
          console.log(error)
          this.loading = false
        }
      )
  }
}
