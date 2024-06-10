import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age:  number = 45;

  //Es una propiedad pero realmente es un método
  get cipitalizeName():string {
    //El toUpperCase es un métodpo de JS
    //para convertir las letras a mayúsculas
    return this.name.toUpperCase();
  }

  //cREAMO UN MÉTODO PARA JUNTAR EL NAME Y EL AGE
  getHeroDescription():string {
    return `${this.name} - ${this.age}` ;
  }

  changeHero():void{
    this.name ='Spiderman';
  }

  changeAge():void{
    this.age = 23;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;
  }



}
