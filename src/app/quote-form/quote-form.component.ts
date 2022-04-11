import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote =new Quote(0,"","","", new Date() ,0,0);
  @Output() addQuote =new EventEmitter<Quote>();

  //emit data to parent component
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

//clear form data
clearQuoteForm(quoteForm: NgForm){
  quoteForm.reset();
}

  constructor() { }

  ngOnInit(): void {
  }

}