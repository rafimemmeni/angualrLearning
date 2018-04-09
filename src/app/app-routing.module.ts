import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import {HttpclientComponent} from './httpclient/httpclient.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingTestComponent } from './routing-test/routing-test.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'htttpclient', component: HttpclientComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
   {path :'RouterTest',component:RoutingTestComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}