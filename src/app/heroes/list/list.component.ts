import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spidermna', 'Iroman', 'Hulk', 'She Hulk', 'Thor', 'Venom'];
  //el valor borrado solo esta dentro del método deleHero
  // si yo quiero que viva dentro de toda la clase
  // creo una variable que alamcene ese valor borrado
  public deletedHero?: string;


  deleteHero():void{
    //el valor borrado solo esta dentro de este método
    // si yo quiero que viva dentro de toda la clase
    // creo una variable que alamcene ese valor borrado
    this.deletedHero = this.heroNames.pop();
  }
  createHero():void{
    this.heroNames.push('Vision');
  }
}
