import { Injectable } from '@angular/core';
import { BaseService } from '../project_config/services'

// interface LoginResponse{
//     body: Login_body,
//     headers: string,
//     status: string
// }

// interface Login_body{
//     data: datastructure,
//     meta: string
// }

// interface datastructure{
//     token : string
// }

@Injectable()
export class LoginService extends BaseService {
    postUrl(data){
        let url = "users/login/"
        return this.post_url(url, data)
    }
}