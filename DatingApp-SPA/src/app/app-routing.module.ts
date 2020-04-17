import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './layout/secure/secure.component';
import { HomeComponent } from './secure/home/home.component';
import { RegisterComponent } from './public/register/register.component';


/**
 * Route constant 
 */
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', component: PublicComponent, data: { title: 'Public Views' }, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: '', component: SecureComponent, canActivate: [AuthGuard],
    data: { title: 'Secure Views' }, children: [{ path: 'home', component: HomeComponent }]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
