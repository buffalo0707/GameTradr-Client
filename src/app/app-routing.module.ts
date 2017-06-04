import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeComponent },
   { path: 'login',  component: LoginComponent },
   { path: 'register',  component: RegisterComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)

  ],
  exports: [RouterModule

  ]
})
export class AppRoutingModule {

}
