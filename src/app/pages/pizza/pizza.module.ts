import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaPageRoutingModule } from './pizza-routing.module';

import { PizzaPage } from './pizza.page';
import { CustomHeaderModule} from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PizzaPageRoutingModule,
        CustomHeaderModule,
        CustomFooterModule
    ],
    declarations: [PizzaPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PizzaPageModule { }
