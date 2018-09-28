import { Component, OnInit } from '@angular/core';
// import { PersonAddService } from './person_add.service'
import { PersonService } from '../person.services';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
    selector: 'person_add',
    templateUrl: './person_add.component.html',
    styleUrls: ['./person_add.component.css']
})

export class PersonAddComponent implements OnInit{
    constructor(private person_service: PersonService, private toaster: ToastrService, private router: Router) {}
    ngOnInit() {}
    
    AddPersonSubmit(data){
        this.person_service.postUrl(data).subscribe(
            data => {
                console.log(data)
                this.toaster.success("User added Successfully")
                this.router.navigate(["/list_person"]);
            },
            error => {
                this.toaster.error("Failed to add person")
                console.log(error)
            }
        )
    }
}