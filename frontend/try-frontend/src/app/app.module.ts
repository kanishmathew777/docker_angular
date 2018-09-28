import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

// local imports
import { AppComponent } from './app.component';

// project_config imports
import { providers_list } from './project_config/providers';
import { component_list } from './project_config/components';
import { appRoutes } from './project_config/app.routes';

@NgModule({
  declarations: component_list,
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: providers_list,
  bootstrap: [AppComponent]
})
export class AppModule {}
