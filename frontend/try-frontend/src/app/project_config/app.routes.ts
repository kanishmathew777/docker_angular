import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';

import { PersonAddComponent } from '../person/person_add/person_add.component';
import { PersonListComponent } from '../person/person_list/person_list.component';
import { PersonEditComponent } from '../person/person_edit/person_edit.component';
import { MapsModule } from '../maps/maps.module';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { GradientChartComponent } from '../gradient-chart/gradient-chart.component';

import { PageNotFoundComponent } from '../notfound.component';
import { AuthGuard } from '../auth/auth.guard';
import * as urls from './urls';


export const appRoutes: Routes = [
    {
      path: `${urls.login}`,
      component: LoginComponent,
      data: { title: 'Login' }
    },
    {
        path: `${urls.add_person}`,
        component: PersonAddComponent,
        data: { title: 'Add Person' }
    },
    {
      path: `${urls.list_person}`,
      component: PersonListComponent,
      data: { title: 'List Person' },
      canActivate: [AuthGuard]
    },
    {
      path: `${urls.edit_person}/:id`,
      component: PersonEditComponent,
      data: { title: 'Edit Person' }
    },
    {
      path: `map`,
      component: MapsModule,
      data: { title: 'map' }
    },
    {
      path: `chatbot`,
      component: ChatbotComponent,
      data: { title: 'map' }
    },
    {
      path: `gradient_chart`,
      component: GradientChartComponent,
      data: { title: 'map' }
    },
    { 
      path: '',
      redirectTo: `${urls.login}/`,
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];