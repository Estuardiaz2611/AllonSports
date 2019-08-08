import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'quienes',
    loadChildren: './quienesSomos/quienes.module#QuienesPageModule'
  },
  {
    path: 'vision',
    loadChildren: './vision/vision.module#VisionPageModule'
  },
  {
    path: 'mision',
    loadChildren: './mision/mision.module#MisionPageModule'
  },
  {
    path: 'aplicacion',
    loadChildren: './aplicacion/aplicacion.module#AplicacionPageModule'
  },
  {
    path: 'valores',
    loadChildren: './valores/valores.module#ValoresPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterPageModule'
  },
  {
    path: 'perfil',
    loadChildren: './perfil/perfil.module#PerfilPageModule'
  },
  {
    path: 'abdomen',
    loadChildren: './abdomen/abdomen.module#AbdomenPageModule'
  },
  {
    path: 'pierna',
    loadChildren: './pierna/pierna.module#PiernaPageModule'
  },
  {
    path: 'brazo',
    loadChildren: './brazo/brazo.module#BrazoPageModule'
  },
  {
    path: 'cardio',
    loadChildren: './cardio/cardio.module#CardioPageModule'
  },
  {
    path: 'calentamiento',
    loadChildren: './calentamiento/calentamiento.module#CalentamientoPageModule'
  },
  {
    path: 'principal',
    loadChildren: './principal/principal.module#PrincipalPageModule'
  },
  {
    path: 'resultados',
    loadChildren: './resultados/resultados.module#ResultadosPageModule'
  },
  {
    path: 'entretenimiento',
    loadChildren: './entretenimiento/entretenimiento.module#EntretenimientoPageModule'
  },
  {
    path: 'contactanos',
    loadChildren: './contactanos/contactanos.module#ContactanosPageModule'
  },
  {
    path: 'dietasConsejos',
    loadChildren: './dietasConsejos/dietasConsejos.module#DietasConsejosPageModule'
  },
  {
    path: 'peliculas',
    loadChildren: './peliculas/peliculas.module#PeliculasPageModule'
  },
  {
    path: 'series',
    loadChildren: './series/series.module#SeriesPageModule'
  },
  {
    path: 'documentales',
    loadChildren: './documentales/documentales.module#DocumentalesPageModule'
  },
  {
    path: 'dietaDos',
    loadChildren: './dietaDos/dietaDos.module#DietaDosPageModule'
  },
  {
    path: 'dietaTres',
    loadChildren: './dietaTres/dietaTres.module#DietaTresPageModule'
  },
  {
    path: 'dietaCuatro',
    loadChildren: './dietaCuatro/dietaCuatro.module#DietaCuatroPageModule'
  },
  {
    path: 'dietaCinco',
    loadChildren: './dietaCinco/dietaCinco.module#DietaCincoPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
