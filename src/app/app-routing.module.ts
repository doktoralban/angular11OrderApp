import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginformComponent} from './loginform/loginform.component';



const routes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component:HomeComponent },
{ path: 'loginForm', component: LoginformComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
