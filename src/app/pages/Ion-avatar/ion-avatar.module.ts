import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './ion-avatar-routing.module';

import { ActionSheetPage } from './ion-avatar.page';
import { PagePageModule } from '../../inicio/page.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule

    PagePageModule
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
