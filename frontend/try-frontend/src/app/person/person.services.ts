import { Injectable } from '@angular/core';
import { BaseService } from '../project_config/services'

@Injectable()
export class PersonService extends BaseService {
    postUrl(data){
        let url = "users/persons/"
        return this.post_url(url, data)
    }
    getUrl(){
        let url = "users/persons/"
        return this.get_url(url)
    }
    putUrl(data, pk){
        let url = "users/persons/"
        return this.put_url(url, data, pk)
    }
}