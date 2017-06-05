import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router) { }

  ngOnInit() {
    this.user = {}
  }

  onRegister() {
    console.log('register')
    this.loading = true;
    this.authService.register(this.user)
      .subscribe(
        data => {
          console.log(data)
          localStorage.setItem('currentUser', JSON.stringify(data.user))
          console.log('currentuser is', localStorage.getItem('currentUser'))
          this.loading = false
        },
        error => {
          console.log(error)
          this.loading = false
        },
        () => {
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
            })}
      )
  }

}
