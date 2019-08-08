import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DietaCuatroPage } from './dietaCuatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DietaCuatroPage
      }
    ])
  ],
  declarations: [DietaCuatroPage]
})
export class DietaCuatroPageModule {}