import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'create', component:CreateComponent},
  {path: 'create/:id', component:CreateComponent},
  {path: 'read', component:ReadComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignUpComponent},
  {path: 'dashboard', component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
