import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/global.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
  providers: [UserService, UploadService]
})
export class PerfilPage implements OnInit {
  public identity;
  public token;
  public url;
  public status: string;
  public user: User;
  public filesToUpload: Array<File>;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _uploadService: UploadService,
    public alertController: AlertController,

  ) {
    this.user = this._userService.getidentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
  }

  editUser() {
    this._userService.updateUser(this.user).subscribe(
      response => {
        if (!response.user) {
          this.status = 'error'
        } else {
          this.status = 'ok'
          console.log(response.user);
          alert('Tus datos han sido actualizados');
          sessionStorage.setItem('identity', JSON.stringify(this.user));
          this.identity = this.user;
          // subir imagen usuario
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(this.url + 'subir-image-usuario/' + this.user._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.user.image = result.user.image;
                sessionStorage.setItem('identity', JSON.stringify(this.user));
              })
          }
          //  this._router.navigate(['/home'])
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
          alert('Error al momento de editar tus datos')
        }
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  async Cierre() {
    const alert = await this.alertController.create({
      header: 'Nos vemos pronto',
      message: 'Cierre de sesion con exito.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
