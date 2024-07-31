import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  // inyección de dependencias
  constructor( private dbzService: DbzService ) {}//como los servicios es privado a manera de buena práctica entonces
  //debemos crear un get

  get character(): Character[] {
    return this.dbzService.character;
  }

  // como el método onDeletCharacter marca error, creamos el método aquí para solucionar el error
  onDeleteCharacter(id: string ):void{ //recibe el id de tipo string porque es l que espero
    this.dbzService.deleteCharacterById( id );//mando a llamar a dbzService por el método deleteCharacterById
  }

  onNewCharacter(character: Character): void {//voy a recibir un character de tipo Character
    this.dbzService.addCharacter( character );//mando a llamar a dbzService por el método addCharacter
  }

}
