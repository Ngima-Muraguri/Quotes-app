import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

 
  @Output() add =new EventEmitter<Quote>();
  newQuote =new Quote(0,"","","",0,0, new Date());

  addQuote(){
    this.add.emit(this.newQuote);
    // this.newQuote = new Quote(0,"","","",0,0, new Date());
      }
//   //emit data to parent component
  // submitQuote(){
  //   this.addQuote.emit(this.newQuote);
  // }

// //clear form data
// clearQuoteForm(quoteForm: NgForm){
//   quoteForm.reset();
// }
// addedQuote(quote){
//   let arraysize = this.newQuote.length;
//   quote.id = arraysize+1;
//   quote.completeDate = new Date(quote.completeDate)
//   this.newQuote.push(quote)
// }
  constructor() { }

  ngOnInit(): void {
  }

}