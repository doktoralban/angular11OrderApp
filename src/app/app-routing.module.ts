import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginformComponent} from './loginform/loginform.component';
import {OrdersComponent} from './orders/orders.component';


const routes: Routes = [ 
  {path: 'index', redirectTo: '/home', pathMatch: 'full'},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component:HomeComponent },
{ path: 'loginForm', component: LoginformComponent },
{ path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
