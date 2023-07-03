import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarPageRoutingModule } from './cadastrar-routing.module';

import { cadastrarPage } from './cadastrar.page';
import { CustomHeaderModule} from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CadastrarPageRoutingModule,
        CustomHeaderModule,
        CustomFooterModule
    ],
    declarations: [
        cadastrarPage,
    ]
})
export class CadastrarPageModule { }
