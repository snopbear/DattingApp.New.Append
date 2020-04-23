import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { PublicComponent } from './layout/public/public.component';
import { SecureComponent } from './layout/secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './secure/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/modules/material/material.module';
import { RegisterComponent } from './public/register/register.component';
import { ErrorInterceptorProvider } from './shared/services/interceptors/error.interceptor';
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap/ngx-bootstrap.module';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      SidenavListComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent,
      PublicComponent,
      SecureComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
      NgxBootstrapModule,
      FormsModule,
      ReactiveFormsModule

   ],
   providers: [
      AuthGuard,
      ErrorInterceptorProvider
      ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
