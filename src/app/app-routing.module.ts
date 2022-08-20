import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserComponent } from './pages/admin-user/admin-user.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { BellsComponent } from './pages/bells/bells.component';
import { CampaniaComponent } from './pages/campania/campania.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnvioMensajeComponent } from './pages/envio-mensaje/envio-mensaje.component';
import { LoginComponent } from './pages/login/login.component';
import { IndividualComponent } from './pages/reports/individual/individual.component';


// tslint:disable-next-line:variable-name
const app_routes: Routes = [

    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'bells', component: BellsComponent, canActivate: [AuthGuard] },
    { path: 'adminUser', component: AdminUserComponent, canActivate: [AuthGuard] },
    { path: 'camp', component: CampaniaComponent, canActivate: [AuthGuard] },
    { path: 'mensaje', component: EnvioMensajeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }, 
    { path: 'reports/individual', component: IndividualComponent, canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'camp' },


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
