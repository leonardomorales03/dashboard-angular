import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LateralMenuComponent } from './shared/lateral-menu/lateral-menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BellsComponent } from './pages/bells/bells.component';
import { AppRoutingMogule } from './app-routing.module';
import { AuthGuard } from './pages/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralMenuComponent,
    FooterComponent,
    DashboardComponent,
    BellsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingMogule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
