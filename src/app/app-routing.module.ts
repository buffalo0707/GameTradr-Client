import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)

  ],
  exports: [RouterModule

  ]
})
export class AppRoutingModule {

}
