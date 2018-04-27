import { ShelterService } from './shelter.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ShelterPreviewComponent } from './shelter-preview/shelter-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    HomeComponent,
    ShelterPreviewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing
  ],
  providers: [AuthService, ShelterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
