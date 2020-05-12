import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthWardGuard } from "./auth-ward.guard";


const routes: Routes = [
  { path:  '', component:  LoginComponent, pathMatch: "full" },
  { path:  'login', component:  LoginComponent},
  { path:  'home', component:  HomeComponent, canActivate: [AuthWardGuard] },
  { path:  '**', component:  LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
