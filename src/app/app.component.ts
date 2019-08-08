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
      title: 'Ejercicios',
      url: '/list',
      icon: 'body'
    },

    {
      title: 'Dietas',
      url: '/dietasConsejos',
      icon: 'restaurant'
    },
    
    {
      title: 'Resultados',
      url: '/resultados',
      icon: 'ios-stats'
    },

    {
      title: 'Entretenimiento',
      url: '/entretenimiento',
      icon: 'ios-desktop'
    },
    {
      title: 'Contactanos',
      url: '/contactanos',
      icon: 'phone-portrait'
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