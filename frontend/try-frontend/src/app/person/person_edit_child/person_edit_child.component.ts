import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.services';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { list_person } from '../../project_config/urls'


@Component({
    selector: 'person-edit-child-cmp',
    templateUrl: './person_edit_child.component.html',
    styleUrls: ['./person_edit_child.component.css']
})

export class PersonEditChildComponent implements OnInit{
    constructor(private person_service : PersonService, private router: Router,
                private route: ActivatedRoute, private toaster: ToastrService) 
    {   
    }
    @Input('person') person: any;
    @Input('person_detail_update') person_update: boolean;
    ngOnInit(){
    }

    @Output() messageEvent = new EventEmitter<boolean>();

    onEditSave(details){
        this.person_service.putUrl(details, this.person.id).subscribe(data => {
            this.person_update = false;
            this.messageEvent.emit(this.person_update)
            this.toaster.success("Person updated Successfully")
        },
        error => {
            this.toaster.error("Failed to add person")
        })
    }
}