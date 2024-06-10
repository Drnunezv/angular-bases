// importaciones propias de JavaScripts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Librerías de terceros
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
// Nuestro código
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
