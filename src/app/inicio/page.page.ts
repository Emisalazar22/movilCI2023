import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

//crear una interface para definir propiedades 

export class PagePage implements OnInit {
//crear listado
//componentes: anyy[] = [];


componentes: Componente[] = [
  {
  icon: 'american-football-outline',
  name: 'Action Sheet',
  redirectTo: '/action-sheet'
  },
  {
  icon: 'alert-circle-outline',
  name: 'Alert',
  redirectTo: '/alert'
  },
];

  constructor() { }

  ngOnInit() {}

}
