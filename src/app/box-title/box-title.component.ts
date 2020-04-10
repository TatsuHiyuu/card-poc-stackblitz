import { Component, OnInit, Input } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-box-title',
  templateUrl: './box-title.component.html',
  styleUrls: ['./box-title.component.scss']
})
export class BoxTitleComponent extends BoxComponent implements OnInit {
  @Input() theme: string;
  
  ngOnInit() {
  }

}