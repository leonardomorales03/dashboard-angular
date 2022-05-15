import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BellsComponent } from './pages/bells/bells.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


// tslint:disable-next-line:variable-name
const app_routes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'bells', component: BellsComponent },
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
