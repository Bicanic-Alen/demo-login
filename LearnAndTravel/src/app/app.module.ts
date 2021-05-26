import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeForgotPasswordComponent } from './change-forgot-password/change-forgot-password.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { HometwoComponent } from './hometwo/hometwo.component';
import { InfoPlaceComponent } from './info-place/info-place.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    ChangeForgotPasswordComponent,
    ChiSiamoComponent,
    AssistenzaComponent,
    HometwoComponent,
    InfoPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
