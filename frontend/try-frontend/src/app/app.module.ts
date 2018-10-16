import { NgModule } from '@angular/core';

// local imports
import { AppComponent } from './app.component';

// project_config imports
import { app_providers } from './project_config/providers';
import { app_components } from './project_config/app.components';
import { app_imports } from './project_config/app.imports';

@NgModule({
  declarations: app_components,
  imports: app_imports,
  providers: app_providers,
  bootstrap: [AppComponent]
})
export class AppModule {}
