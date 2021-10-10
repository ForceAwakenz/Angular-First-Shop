import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShowcaseComponent } from './showcase/showcase.component';
// import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShowcaseComponent,
    // AdminComponent
  ],
  imports: [BrowserModule, AppRoutingModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
