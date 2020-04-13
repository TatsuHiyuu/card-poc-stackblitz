import { Component, OnInit, Input } from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-box-title',
  templateUrl: './box-title.component.html',
  styleUrls: ['../../assets/style/theme.scss', './box-title.component.scss']
})
export class BoxTitleComponent extends BoxComponent implements OnInit {
  
  ngOnInit() {
  }
}