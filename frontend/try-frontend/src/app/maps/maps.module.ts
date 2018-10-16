import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// module routes, declarations and imports 
import { module_routes } from '../maps/module_config/routes';
import { module_declarations } from '../maps/module_config/declarations';
import { module_exports } from '../maps/module_config/exports';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(module_routes)
  ],
  declarations: module_declarations,
  exports: module_exports
})
export class MapsModule { }
