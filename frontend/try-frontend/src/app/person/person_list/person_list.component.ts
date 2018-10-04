import { Component, OnInit } from '@angular/core';
// import { PersonListService } from './person_list.service'
import { PersonService } from '../person.services'
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { edit_person } from '../../project_config/urls'


@Component({
    selector: 'person_list-cmp',
    templateUrl: './person_list.component.html',
    styleUrls: ['./person_list.component.css']
})

export class PersonListComponent implements OnInit{
    table_headings = null
    table_contents = null
    constructor(private person_service : PersonService, private router: Router,
                private toaster: ToastrService) 
    {}
    ngOnInit() {
        this.person_service.getUrl().subscribe(
            data => {this.table_contents=data.data},
            error => {
                this.toaster.error(error.error['detail'])} 
        )
        this.table_headings = ['id', 'first name', 'last name', 'edit details']
    }
    edit_person(person){
        this.router.navigate([`/${edit_person}/`, person.id, {first_name:person.first_name, 
                                                           last_name: person.last_name}]);
    }
}
