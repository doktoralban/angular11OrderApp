import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HotelinfocardsComponent } from './hotelinfocards/hotelinfocards.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AlertifyjsService } from './Services/alertifyjs.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginformComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    HotelinfocardsComponent,
    OurteamComponent,
    OrdersComponent,
    ProductsComponent,
    ItemsComponent,
    CategoriesComponent,
    CustomersComponent,
    EmployeesComponent,
    ShippersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlertifyjsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
