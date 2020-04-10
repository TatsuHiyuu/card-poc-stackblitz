import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() might: number;
  @Input() description: string;
  @Input() image: string;
  @Input() position: string;
  
  constructor() { }

  ngOnInit() {
  }

}