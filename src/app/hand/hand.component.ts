import { Component, OnInit } from '@angular/core';
import { cards } from '../data/cards';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  cards = cards;

  constructor() { }

  ngOnInit() {
  }

}