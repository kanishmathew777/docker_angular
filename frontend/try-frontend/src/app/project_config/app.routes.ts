import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';

import { PersonAddComponent } from '../person/person_add/person_add.component';
import { PersonListComponent } from '../person/person_list/person_list.component';
import { PersonEditComponent } from '../person/person_edit/person_edit.component';

import { PageNotFoundComponent } from '../notfound.component';
import { TabComponent } from '../tabs/tabs.component';
import { AuthGuard } from '../auth/auth.guard';


export const appRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login' }
    },
    {
        path: 'add_person',
        component: PersonAddComponent,
        data: { title: 'Add Person' }
    },
    {
      path: 'list_person',
      component: PersonListComponent,
      data: { title: 'List Person' },
      canActivate: [AuthGuard]
    },
    {
      path: 'edit_person/:id',
      component: PersonEditComponent,
      data: { title: 'List Person' }
    },
    {
      path: 'tab-component',
      component: TabComponent,
      data: { title: 'Tabs' }
    },
    { 
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];