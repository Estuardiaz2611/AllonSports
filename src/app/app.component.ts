import { Component } from '@angular/core';
//menu
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
//inicio menu
export class AppComponent {
  public appPages = [
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Ventas',
      url: '/list',
      icon: 'card'
    },

    {
      title: 'Ejercicios',
      url: '/list',
      icon: 'body'
    },

    {
      title: 'Dietas y Consejos',
      url: '/list',
      icon: 'restaurant'
    },
    
    {
      title: 'Resultados',
      url: '/list',
      icon: 'ios-stats'
    },

    {
      title: 'Entretenimiento',
      url: '/list',
      icon: 'ios-desktop'
    },
    {
      title: 'Cerrar Sesion',
      url: '/home',
      icon: 'home'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
//finish menu