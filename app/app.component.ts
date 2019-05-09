import { Component, OnInit } from '@angular/core';
import { Router, UrlTree, UrlSegment } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ClientApp';
    url: string;

    constructor(
        //private router: Router
    ) { }

    onActivate(event): void {
        console.log(event);         // Sample Output when you visit ChildComponent url
        console.log(event.title);   // 'hi' 
    }

    ngOnInit() {
        //let urlTree: UrlTree = this.router.parseUrl(this.router.url);
        //console.log(this.router.url);
        //console.log(urlTree);
        this.url = window.location.href;
        console.log(this.url);
    }
}
