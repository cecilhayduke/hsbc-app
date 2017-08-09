import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { BeerComponent }  from './beer/beer.component';
import { SocialComponent }  from './social/social.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about',  component: AboutComponent },
  { path: 'beer', component: BeerComponent },
  { path: 'social', component: SocialComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class BeerRoutingModule {}
