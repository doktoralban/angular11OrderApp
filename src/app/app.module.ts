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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginformComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    HotelinfocardsComponent,
    OurteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
