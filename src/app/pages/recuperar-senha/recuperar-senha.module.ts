import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarSenhaPageRoutingModule } from './recuperar-senha-routing.module';

import { RecuperarSenhaPage } from './recuperar-senha.page';

import { CustomHeaderModule } from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarSenhaPageRoutingModule,
    CustomHeaderModule,
    CustomFooterModule
  ],
  declarations: [RecuperarSenhaPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecuperarSenhaPageModule {}
