import { Routes } from '@angular/router';
import { CustomAdminMapComponent } from '../admin-map/admin-map.component';
import { AdminMapComponent } from '../map/admin-map.component';


export const module_routes: Routes = [
    { path: 'custom_map',  component: CustomAdminMapComponent },
    { path: 'old_map', component: AdminMapComponent }
  ];