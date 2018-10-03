import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

import { add_person } from '../project_config/urls'

@Component({
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    errors = null;
    token = null;
    constructor(private loginservice: LoginService, private toaster: ToastrService, private router: Router) { }
    ngOnInit() {
    }
    onClickSubmit(data) {
        // this.loginservice.postUrl(data).pipe(retry(0), catchError(this.handleError)).subscribe(data => {
        //     if (data.status == 200)
        //         console.log(data.status);
        //     else
        //         console.log(data.headers);
        //         console.log(data.body);
        // })
        // alert("Entered Email id : " + data.username);
        // alert("Entered Password is: " + data.password);
        this.loginservice.postUrl(data).subscribe(
            data => {
                console.log(data.data.token)
                this.token = data.data.token
                this.toaster.success("Logged in Successfully")
                this.router.navigate([`/${add_person}`]);
                localStorage.setItem('token', this.token)
            },
            error => {
                this.errors = error;
                console.log(this.errors)
                if (this.errors.status==404){
                    this.toaster.error('service unavailable', 'No Servce')
                }
                else if (!Object.keys(this.errors.error.error).length)
                    this.toaster.error(this.errors.error.detail.toUpperCase())
                else {
                    for (let key in this.errors.error.error) {
                        let value = this.errors.error.error[key];
                        this.toaster.error(key.concat(': ' + value), this.errors.error.detail, {
                            timeOut: 3000,
                            closeButton: true,
                            tapToDismiss: true,
                        });
                    }
                }
            }
        )
    }
    // private handleError(error: HttpErrorResponse) {
    //     return throwError(error.message);
    // }
}