import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', component: LandingComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
