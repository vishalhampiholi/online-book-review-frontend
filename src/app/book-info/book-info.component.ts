import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../home/home.component';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  constructor() { }
  @Input("book")
  book_info !: Element;
  name!: string;
  id !: number;
  price!: number;


  ngOnInit(): void {
  }

  getDetails(){

    console.log(this.book_info)
    this.name = this.book_info.name
    this.id = this.book_info.id
    this.price = this.book_info.price

  }

}
