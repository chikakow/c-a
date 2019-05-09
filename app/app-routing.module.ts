import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MiniPortalComponent } from 'mini-portal';
// import { FisReconcileComponent } from '@fis-reconcile/public_api';
//import { FisReconcileModule } from 'fis-reconcile';
//import { RefundsmanagementComponent } from './shared/refundsmanagement/refundsmanagement.component';

const angular: any = {};
angular.atsServerValues = {};
angular.atsServerValues.companyId = '1';

const routes: Routes = [
    {
        path: '**', component: MiniPortalComponent
    }


   // { path: '', redirectTo: '/company/:this.angular.atsServerValues.companyId', pathMatch: 'full' },
   // { path: 'company/:this.angular.atsServerValues.companyId', component: MiniPortalComponent },
   // //{ path: 'company/:this.angular.atsServerValues.companyId/reconcile', loadChildren: () => FisReconcileModule },

   // //{ path: '', redirectTo: '/company/:this.angular.atsServerValues.companyId', pathMatch: 'full' },
   // //{ path: 'company/:this.angular.atsServerValues.companyId', component: MiniPortalComponent },
   // //// use lazy loading of routes - refer to the url below for info:
   // { path: 'company/:this.angular.atsServerValues.companyId/refunds/management', component: RefundsmanagementComponent },

   // { path: 'company/:this.angular.atsServerValues.companyId', loadChildren: () => FisReconcileModule },
   //// { path: 'company/:this.angular.atsServerValues.companyId/rec', loadChildren:()=> FisReconcileModule },
   // //{ path: '**', component: MiniPortalComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
