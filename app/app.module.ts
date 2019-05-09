import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared Modules - includes custom mdules (if any)
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap/ngx-bootstrap.module';

// Third Party services
import { CookieService } from 'ngx-cookie-service';
// Libraries/Modules
import { MiniPortalModule } from 'mini-portal';
// import { FisReconcileModule } from 'fis-reconcile';
import { CoreFoundationModule, KendoUiAngularModule, SiteService, InitDataService } from 'core-foundation';
// Services
import { httpInterceptorProviders } from './shared/services/http-interceptors';
// import { KendoUiAngularModule } from './shared/modules/kendo-ui-angular/kendo-ui-angular.module';
import { FormsModule } from '@angular/forms';
import { RefundsmanagementModule } from './apps/refundsmanagement/refundsmanagement.module';

@NgModule({

    declarations: [
        AppComponent,
        //ChromeBarComponent,
        //CompanyBranchComponent,
        //EmployeeComponent,
        //AppListComponent,
        //NotificationsComponent, 
        //SettingsComponent,
        //HistoryComponent,
        //SiteComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule, 
        AppRoutingModule,
        HttpClientModule,
        FormsModule,

        // Shared Modules in app
        NgxBootstrapModule,
        KendoUiAngularModule,

        // Libraries/Modules
        CoreFoundationModule, 
        MiniPortalModule,
        RefundsmanagementModule
       // FisReconcileModule,
       // PDFExportModule,
        
    ],
    providers: [
        //ChromeService,
        //SiteService,
        //InitDataService,
        CookieService,
        httpInterceptorProviders   // barrel file for interceptors
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
