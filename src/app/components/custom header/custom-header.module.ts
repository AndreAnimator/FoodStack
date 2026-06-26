import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { CustomHeaderComponent } from "./custom-header.component";
@NgModule({
    declarations: [
        CustomHeaderComponent,
    ],
    exports: [
        CustomHeaderComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomHeaderModule {
    

    

}