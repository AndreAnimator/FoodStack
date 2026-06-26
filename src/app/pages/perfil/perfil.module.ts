import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

import { CustomHeaderModule} from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PerfilPageRoutingModule,
        CustomHeaderModule,
        CustomFooterModule
    ],
    declarations: [PerfilPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PerfilPageModule { }
