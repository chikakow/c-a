import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundsmanagementComponent } from './refundsmanagement.component';
import { FormsModule } from '@angular/forms';
import { CoreFoundationModule, KendoUiAngularModule } from 'core-foundation';
import { PlgnJournalModule } from 'plgn-journal';
import { GeneraterefundsComponent } from './components/generaterefunds/generaterefunds.component';

import { CustomerRefundDetailsComponent } from './components/generaterefunds/customer-refund-details/customer-refund-details.component';
import { HeldrefundsComponent } from './components/heldrefunds/heldrefunds.component';
import { JournalComponent } from './components/journal/journal.component';
import { PotentialrefundsComponent } from './components/potentialrefunds/potentialrefunds.component';
import { RefundchecksreportComponent } from './components/refundchecksreport/refundchecksreport.component';
import { ReportrefundsComponent } from './components/reportrefunds/reportrefunds.component';
import { ReportRefundDetailsComponent } from './components/reportrefunds/report-refund-details/report-refund-details.component';
import { RefundsManagementContainerComponent } from './components/refunds-management-container/refunds-management-container.component';

@NgModule({
  declarations: [
    RefundsmanagementComponent,
    GeneraterefundsComponent,
    CustomerRefundDetailsComponent,
    HeldrefundsComponent,
    JournalComponent,
    PotentialrefundsComponent,
    RefundchecksreportComponent,
    ReportrefundsComponent,
    ReportRefundDetailsComponent,
    RefundsManagementContainerComponent
  ],

    imports: [

            CommonModule,
            FormsModule,
            KendoUiAngularModule,
            CoreFoundationModule,
            PlgnJournalModule
  ],
  exports: [
    RefundsmanagementComponent,
    GeneraterefundsComponent,
    CustomerRefundDetailsComponent,
    HeldrefundsComponent,
    JournalComponent,
    PotentialrefundsComponent,
    RefundchecksreportComponent,
    ReportrefundsComponent,
    ReportRefundDetailsComponent,
    KendoUiAngularModule,
    PlgnJournalModule
  ]
})
export class RefundsmanagementModule { }
