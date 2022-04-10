import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-ap',
  templateUrl: './quote-ap.component.html',
  styleUrls: ['./quote-ap.component.css']
})
export class QuoteApComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'if you want the rainbow you gotta put up with the rain',
      'titus',
      'Dolly',
      12,
      0,
      new Date(2022, 3, 9)
    ),
    new Quote(
      1,
      'when you get tired, learn to rest not quit',
      'Joy',
      'Bankys',
      12,
      0,
      new Date(2022, 3, 9)
    ),
    new Quote(
      1,
      'A commit a day keeps the poverty away',
      'Jecinta',
      'nancy',
      12,
      0,
      new Date(2022, 3, 9)
    ),
    new Quote(
      1,
      'when in doubt choose change',
      'mercy',
      'Joseph',
      12,
      0,
      new Date(2022, 3, 9)
    ),
    new Quote(
      1,
      'love recognizes no barriers',
      'Jeff',
      'Flora',
      12,
      0,
      new Date(2022, 3, 9)
    ),
    ];
    
  constructor() { }

  ngOnInit(): void {
  }

}
