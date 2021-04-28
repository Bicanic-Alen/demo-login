import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeForgotPasswordComponent } from './change-forgot-password/change-forgot-password.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent},
  { path: 'login', component : LoginComponent},
  { path: 'signup', component : RegisterComponent},
  { path: 'forgotPassword', component : ForgotPasswordComponent},
  { path: 'changePassword', component : ChangePasswordComponent},
  { path: 'changeForg', component: ChangeForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
