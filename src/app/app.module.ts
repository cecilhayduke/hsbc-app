import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BeerComponent } from './beer/beer.component';
import { SocialComponent } from './social/social.component';

import { BeerRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    BeerComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BeerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
