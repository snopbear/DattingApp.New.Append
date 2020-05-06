

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './layout/public/public.component';
import { LoginComponent } from './public/login/login.component';
import { SecureComponent } from './layout/secure/secure.component';
import { HomeComponent } from './secure/home/home.component';
import { RegisterComponent } from './public/register/register.component';
import { ListsComponent } from './secure/lists/lists.component';
import { MemberCardComponent } from './secure/members/member-card/member-card.component';
import { MemberListComponent } from './secure/members/member-list/member-list.component';
import { MemberDetailsComponent } from './secure/members/member-details/member-details.component';
import { MessagesComponent } from './secure/messages/messages.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { MemberDetailResolver } from './shared/resolvers/member-detail/member-detail.resolver';
import { MemberListResolver } from './shared/resolvers/member-list/member-list.resolver';
import { MemberEditComponent } from './secure/members/member-edit/member-edit.component';
import { MemberEditResolver } from './shared/resolvers/member-edit/member-edit.resolver';
import { PreventUnsavedChanges } from './shared/guards/prevent-unsaved-changes/prevent-unsaved-changes.guard';


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
      { path: 'home', component: HomeComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}  },
      { path: 'members/:id', component: MemberDetailsComponent, resolve: {user: MemberDetailResolver} },
      { path: 'member/edit', component: MemberEditComponent , resolve: {user: MemberEditResolver},  canDeactivate: [PreventUnsavedChanges]},
      { path: 'messages', component: MessagesComponent },
      { path: 'card', component: MemberCardComponent }


    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
