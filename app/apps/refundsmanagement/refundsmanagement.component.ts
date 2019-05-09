import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {  SiteService } from 'core-foundation';


@Component({
  selector: 'app-refundsmanagement',
  templateUrl: './refundsmanagement.component.html',
  styleUrls: ['./refundsmanagement.component.scss']
})
export class RefundsmanagementComponent implements OnInit {

    //sidebar: boolean;
    //site: any;    
    //private subscription: Subscription;       
    //app: any = {};
    //nodeList: any;
    //text: any;
    //enums: any;
    //i18n: any;
    //angular: any;
    //isShowChrome: boolean;
    //nodeEnum: any;

    constructor(
        private siteService: SiteService       
    )
        {  }    

    ngOnInit() {      
        //this.angular = window["angular"];     
        //this.isShowChrome = true;
        //this.nodeList = this.angular.atsServerValues.nodes;
        //let siteJson: any = this.siteService.getSiteJson();
        //let constants: any = siteJson.constants;
        //this.nodeEnum = constants.enums.refundsmanagement.NodeEnum;
        //this.site = constants.i18n.site;       
        //this.siteService.getSidemargin().subscribe((data) => {
        //    this.sidebar = data;
        //});

    }

   

}