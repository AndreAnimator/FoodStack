import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { CustomHeaderModule} from 'src/app/components/custom header/custom-header.module';
import { CustomFooterModule } from 'src/app/components/custom-footer/custom-footer.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        CustomHeaderModule,
        CustomFooterModule,
    ],
    declarations: [
        LoginPage,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginPageModule { }
