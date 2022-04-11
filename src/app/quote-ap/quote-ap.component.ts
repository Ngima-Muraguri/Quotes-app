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
      0,
      0,
      new Date(2021, 3, 9)
    ),
   
    new Quote(
      1,
      'A commit a day keeps the poverty away',
      'Jecinta',
      'nancy',
      0,
      0,
      new Date(2022, 4, 9)
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
  addedQuote(quotes){
    let arraysize = this.quotes.length;
    quotes.id = arraysize+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
