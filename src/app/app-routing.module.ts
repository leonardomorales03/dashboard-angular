import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';
import { BellsComponent } from './pages/bells/bells.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';


// tslint:disable-next-line:variable-name
const app_routes: Routes = [

    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
    { path: 'bells', component: BellsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }, 
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },


];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingMogule { }
