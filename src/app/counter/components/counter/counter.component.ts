import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  styleUrl: './counter.component.css',
  template: `

  <h2>Counter: <p>
  {{ counter }}
  </p> </h2>


  <div>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetBy()">Reset</button>
    <button (click)="increaseBy(+1)">+1</button>
  </div>
  `,
})

export class CounterComponent  {
  public title: string = 'Hola mundo';
  public counter: number = 0;

  //creamos un nuevo método para incrementar el valor
  increaseBy(value: number):void {
    //incrementamos el counter dependiendo del valor que recibo
    this.counter += value;
  }
  resetBy():void{
    this.counter = 0;
  }
}
