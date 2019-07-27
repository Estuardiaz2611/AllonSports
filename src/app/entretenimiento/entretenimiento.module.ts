import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { EntretenimientoPage } from './entretenimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EntretenimientoPage
      }
    ])
  ],
  declarations: [EntretenimientoPage]
})
export class EntretenimientoPageModule {}