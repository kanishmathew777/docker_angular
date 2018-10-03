import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'tab-component',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
  })

export class TabComponent implements OnInit {
    public href: string = "";
    // navLinks = [
    //     { path: 'login', label: 'Login' },
    //     { path: 'add_person', label: 'Add Person' },
    //     { path: 'list_person', label: 'List Person' },
    //   ];
    constructor(private router: Router) { }
    ngOnInit() {
        this.href = this.router.url;
        console.log(this.href)
    }
    goAddperson(){
        this.router.navigate(['add_person']);
    }
    goListperson(){
        this.router.navigate(['list_person']);
    }
}