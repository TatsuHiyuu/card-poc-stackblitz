import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { AreaComponent } from './area/area.component';
import { HandComponent } from './hand/hand.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent, BoardComponent, AreaComponent, HandComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
