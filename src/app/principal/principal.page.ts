import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: 'principal.page.html',
  styleUrls: ['principal.page.scss'],
})
export class PrincipalPage {

  constructor( public alertController: AlertController, ) {}

  async Cierre() {
    const alert = await this.alertController.create({
      header: 'Nos vemos pronto',
      message: 'Cierre de sesion con exito.',
      buttons: ['OK']
    });

    await alert.present();
  }

}