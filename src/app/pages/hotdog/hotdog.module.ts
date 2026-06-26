import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotdogPageRoutingModule } from './hotdog-routing.module';

import { HotdogPage } from './hotdog.page';
import { CustomHeaderModule} from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HotdogPageRoutingModule,
        CustomHeaderModule,
        CustomFooterModule
    ],
    declarations: [HotdogPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HotdogPageModule { }
