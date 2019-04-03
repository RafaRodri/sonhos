import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SonhosPage } from './sonhos.page';
import { SonhoPage } from './sonho/sonho.page';

import {HttpClientModule} from '@angular/common/http';
import {ModalComponentModule} from '../modal/modal.module';
import {PopoverComponentModule} from '../popover/popover.module';
import {DreamService} from '../../providers/dream/dream.provider';
import {CategoryService} from '../../providers/category/category.provider';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ModalComponentModule,
    PopoverComponentModule,
    RouterModule.forChild([{ path: '', component: SonhosPage }])
  ],
  declarations: [SonhosPage, SonhoPage],
  providers: [DreamService, CategoryService]
})
export class SonhosPageModule {}
