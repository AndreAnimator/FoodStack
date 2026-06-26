import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CustomHeaderModule } from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        CustomHeaderModule,
        CustomFooterModule
    ],
    declarations: [
        HomePage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule { }
