import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   // para permitir mandar la informacion desde main-page hasta ListComponent.Component
  // será con el decorador @input, esto no indica que mi listComponent va a recibir una propiedad
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;


  //FUNCIÓN PARA IMPRIMIR EN PANTALLA EL INDICE DEL ELEMENTO A  ELIMINAR DE MI LISTA
  onDeleteCharacter( id?:string ): void {//Recibimos el id? opcional

    if ( !id ) return;//si el is no existe (!id), que unca lo mande a llamar

    this.onDelete.emit(id);
  }
   constructor() {

   }
}
