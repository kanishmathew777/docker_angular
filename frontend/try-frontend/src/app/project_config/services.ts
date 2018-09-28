import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

interface Response {
    data: any;
    meta: string;
  }

@Injectable()
export class BaseService {
    bearer = 'Token'
    // httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization': `${this.bearer} ${localStorage.getItem('token')}`
    //     })
    //   }
    constructor(private http: HttpClient) { 
    }
    post_url(url, data){
        let api_url = environment.host.concat(url)
        // return this.http.post<Response>(api_url, data, {headers: this.httpOptions.headers})
        return this.http.post<Response>(api_url, data)

    }
    get_url(url){
        let api_url = environment.host.concat(url)
        // return this.http.get<Response>(api_url, {headers: this.httpOptions.headers})
        return this.http.get<Response>(api_url)
    }
    put_url(url, data, pk){
        let api_url = environment.host.concat(url)
        let update_url = api_url + pk +'/'
        // return this.http.put<Response>(update_url, data, {headers: this.httpOptions.headers})
        return this.http.put<Response>(update_url, data)
        
    }
}