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
      new Date(2021, 3, 9)
    ),
    new Quote(
      1,
      'when you get tired, learn to rest not quit',
      'Joy',
      'Bankys',
      12,
      0,
      new Date(2022, 3, 7)
    ),
    new Quote(
      1,
      'A commit a day keeps the poverty away',
      'Jecinta',
      'nancy',
      12,
      0,
      new Date(2022, 4, 9)
    ),
    new Quote(
      1,
      'when in doubt choose change',
      'mercy',
      'Joseph',
      12,
      0,
      new Date(2020, 8, 9)
    ),
    new Quote(
      1,
      'love recognizes no barriers',
      'Jeff',
      'Flora',
      12,
      0,
      new Date(2021, 3, 5)
    ),
    ];
    upVoteIcon(index:number){
      var up=this.quotes[index].upvote+1;
      this.quotes[index].upvote=up;
  }

  downVoteIcon(index:number){
      var down=this.quotes[index].downvote+1;
      this.quotes[index].downvote=down;
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
