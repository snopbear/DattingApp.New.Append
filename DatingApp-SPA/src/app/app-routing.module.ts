import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './layout/secure/secure.component';
import { HomeComponent } from './secure/home/home.component';
import { RegisterComponent } from './public/register/register.component';
import { ListsComponent } from './secure/lists/lists.component';
import { MemberListComponent } from './secure/member-list/member-list.component';
import { MessagesComponent } from './secure/messages/messages.component';
import { AuthGuard } from './shared/guards/auth.guard';


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
    path: '', component: SecureComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    data: { title: 'Secure Views' }, children: [
      { path: '', component: HomeComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'members', component: MemberListComponent },
      { path: 'messages', component: MessagesComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
