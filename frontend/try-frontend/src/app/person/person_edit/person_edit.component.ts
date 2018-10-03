import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.services';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'person_edit-cmp',
    templateUrl: './person_edit.component.html',
    styleUrls: ['./person_edit.component.css']
})

export class PersonEditComponent implements OnInit{
    private first_name = null
    private last_name = null
    private id = null
    constructor(private person_service : PersonService, private router: Router,
                private route: ActivatedRoute, private toaster: ToastrService) 
    {   
    }
    ngOnInit(){
        this.route.params.subscribe(params=>{
            this.first_name = params['first_name']
            this.last_name = params['last_name']
            this.id = params['id']
        })
    }
    onEditSave(details){
        this.person_service.putUrl(details, this.id).subscribe(data => {
            console.log(data)
            this.toaster.success("Person updated Successfully")
            this.router.navigate(["/list_person"]);
        },
        error => {
            this.toaster.error("Failed to add person")
            console.log(error)
        })
    }
}