import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { ProductComponent } from "../product/product.component";
import { ShowcaseComponent } from "./showcase.component";

@NgModule({
    declarations: [
        ProductComponent,
        ShowcaseComponent
    ],
    imports: [
        AppRoutingModule
    ]
})
export class ShowcaseModule {

}