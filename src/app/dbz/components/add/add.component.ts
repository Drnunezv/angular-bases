import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  // propiedad para emitir los datos al formulario
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter():void{
    console.log(this.character);
    // condición para determinar que si no ingreso nombre, es decir, es igual a cero, entonces no haga nada
    if( this.character.name.length === 0 ) return;

    //Si tiene un nombre entoncer emitimos el character
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0 };
  }
}
