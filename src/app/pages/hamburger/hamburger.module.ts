import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HamburgerPageRoutingModule } from './hamburger-routing.module';
import { HamburgerPage } from './hamburger.page';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';
import { CustomHeaderModule } from 'src/app/components/custom header/custom-header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HamburgerPageRoutingModule,
        IonicModule,
        CustomHeaderModule,
        CustomFooterModule
    ],
    declarations: [
        HamburgerPage
      ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HamburgerPageModule { }
