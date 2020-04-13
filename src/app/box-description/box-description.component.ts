import { Component, OnInit, Input } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-box-description',
  templateUrl: './box-description.component.html',
  styleUrls: ['./box-description.component.scss']
})
export class BoxDescriptionComponent extends BoxComponent implements OnInit {
  @Input() protected description: string;

  ngOnInit() {
  }

}