import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  providers: [UserService],
})
export class LoginPage implements OnInit {
  public user: User;
  public identity;
  public token;
  public status;
  constructor(
    private _router: Router,
    private _userService: UserService,
    public alertController: AlertController,
  ) {

    this.user = new User("", "", "", "", "", "", "", "");
  }

  ngOnInit() {
  }

  getToken() {
    this._userService.login(this.user, 'true').subscribe(

      response => {
        this.token = response.token;
        console.log(this.token)
        if (this.token.length <= 0) {
          this.status = 'error'

        } else {
          sessionStorage.setItem('token', this.token)
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
        }

      }
    )
  }
  login() {
    this._userService.login(this.user).subscribe(
      response => {
        this.identity = response.user;
        console.log(this.identity);
        if (!this.identity) {
          this.status = 'error'
        } else {
          sessionStorage.setItem('identity', JSON.stringify(this.identity))
          this.getToken();
          this.status = 'ok';
          this._router.navigate(['/principal'])
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
  }
  async Alert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: 'Inicio de sesion exitoso.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async ErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Sesion',
      message: 'Usuario o contraseña incorrectos.',
      buttons: ['OK']
    });

    await alert.present();
  }

}