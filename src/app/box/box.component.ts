import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['../../assets/style/theme.scss', './box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() protected theme: string;
  @Input() protected text: string;
  @Input() protected value: number;

  constructor() {}

  ngOnInit() {
  }

}