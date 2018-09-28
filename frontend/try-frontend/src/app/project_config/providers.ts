import { MyserviceService } from '../myservice.service';
import { LoginService } from '../login/login.service';
import { BaseService } from './services';
import { AuthGuard } from '../auth/auth.guard';
import { Authservice } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../auth/token-interceptor.service'
// import { PersonListService } from '../person/person_list/person_list.service';
// import { PersonAddService } from '../person/person_add/person_add.service';
// import { PersonEditService } from '../person/person_edit/person_edit.service';
import { PersonService } from '../person/person.services';

// export const providers_list = [MyserviceService, LoginService, BaseService, 
//     PersonListService, PersonAddService, PersonEditService, PersonService]

export const providers_list = [MyserviceService, LoginService, BaseService, 
    PersonService, Authservice, AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }]