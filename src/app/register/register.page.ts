import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { alertController } from '@ionic/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
  providers: [UserService],
})
export class RegisterPage implements OnInit {
  public user: User;
  public status;
  constructor(private _userService: UserService, private _router: Router, ) {

    this.user = new User("", "", "", "", "", "", "ROL_USUARIO", "")
  }

  ngOnInit() {
  }
  registrar() {
    this._userService.registro(this.user).subscribe(
      response => {
        if (response) {
          console.log(response);
          this.status = 'ok';
          this._router.navigate(['/login'])
          alert('El usuario ha sido creado Exitosamente')
        }
      },
      error => {
        console.log(<any>error)
        this.status = 'error'
        alert('El usuario ya esta creado');
      }
    )
  }
}