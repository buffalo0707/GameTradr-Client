import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { ListingsComponent } from './listings/listings.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeComponent },
   { path: 'login',  component: LoginComponent },
   { path: 'register',  component: RegisterComponent },
   { path: 'password',  component: PasswordComponent },
   { path: 'listings',  component: ListingsComponent },
   { path: 'new-listing',  component: NewListingComponent },
   { path: 'edit-listing/:id',  component: EditListingComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)

  ],
  exports: [RouterModule

  ]
})
export class AppRoutingModule {

}
