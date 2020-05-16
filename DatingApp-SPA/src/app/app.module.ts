import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/modules/material/material.module';

import { ErrorInterceptorProvider } from './shared/services/interceptors/error/error.interceptor';
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap/ngx-bootstrap.module';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { AuthorizationInterceptor } from './shared/services/interceptors/authorization/authorization.interceptor';
import { AddHeaderInterceptor } from './shared/services/interceptors/add-header/add-header.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { PublicComponent } from './layout/public/public.component';
import { SecureComponent } from './layout/secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './secure/home/home.component';
import { RegisterComponent } from './public/register/register.component';
import { MemberListComponent } from './secure/members/member-list/member-list.component';
import { ListsComponent } from './secure/lists/lists.component';
import { MessagesComponent } from './secure/messages/messages.component';
import { MemberCardComponent } from './secure/members/member-card/member-card.component';
import { MemberDetailsComponent } from './secure/members/member-details/member-details.component';


import { MemberDetailResolver } from './shared/resolvers/member-detail/member-detail.resolver';
import { MemberListResolver } from './shared/resolvers/member-list/member-list.resolver';
import { MemberEditComponent } from './secure/members/member-edit/member-edit.component';
import { MemberEditResolver } from './shared/resolvers/member-edit/member-edit.resolver';
import { PreventUnsavedChanges } from './shared/guards/prevent-unsaved-changes/prevent-unsaved-changes.guard';
import { ProductListFlatGridComponent } from './secure/rxjs-module/product-list-flat-grid/product-list-flat-grid.component';
import { CombiningStreamsComponent } from './secure/rxjs-module/combining-streams/combining-streams.component';
import { ReactToActionComponent } from './secure/rxjs-module/react-to-action/react-to-action.component';
import { ParentComponent } from './secure/rxjs-module/parent-to-child/parent/parent.component';
import { ChildComponent } from './secure/rxjs-module/parent-to-child/child/child.component';
import { ContainerComponent } from './secure/rxjs-module/parent-to-child/container/container.component';




export function tokenGetter(){
   return localStorage.getItem('token');

}
@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      SidenavListComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent,
      PublicComponent,
      SecureComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailsComponent,
      MemberEditComponent,
      ProductListFlatGridComponent,
      CombiningStreamsComponent,
      ReactToActionComponent,
      ParentComponent,
      ChildComponent,
      ContainerComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
      // NgxBootstrapModule,
      FormsModule,
      ReactiveFormsModule,
      NgxGalleryModule,
      JwtModule.forRoot({
         config: {
           // tslint:disable-next-line:object-literal-shorthand
           tokenGetter: tokenGetter,
           whitelistedDomains: ['localhost:5000'],
           blacklistedRoutes: ['localhost:5000/api/auth']
         }
       })
   ],
   providers: [
      AuthGuard,
      PreventUnsavedChanges,
      ErrorInterceptorProvider,
      MemberDetailResolver,
      MemberListResolver,
      MemberEditResolver,
      // { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }, // Handle Http headers
      { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true }, // Handle Http headers
      ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
