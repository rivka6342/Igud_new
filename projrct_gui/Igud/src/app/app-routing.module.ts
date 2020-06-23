import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import {AuthGuard} from './auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
 // {path:'' ,component:AppComponent,canActivate: [AuthGuard]},
 // {//path:'login' ,component:LogInComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
