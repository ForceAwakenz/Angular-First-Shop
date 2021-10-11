import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseModule } from './showcase/showcase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AdminModule, ShowcaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
