import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { AreaComponent } from './area/area.component';
import { HandComponent } from './hand/hand.component';
import { BoxComponent } from './box/box.component';
import { BoxTitleComponent } from './box-title/box-title.component';
import { BoxDescriptionComponent } from './box-description/box-description.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DragDropModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent, BoardComponent, AreaComponent, HandComponent, BoxComponent, BoxTitleComponent, BoxDescriptionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
