import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LateralMenuComponent } from './shared/lateral-menu/lateral-menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BellsComponent } from './pages/bells/bells.component';
import { AppRoutingMogule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralMenuComponent,
    FooterComponent,
    DashboardComponent,
    BellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingMogule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
