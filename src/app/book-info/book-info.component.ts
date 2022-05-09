import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  constructor() { }
  @Input("book") book_info: any;

  ngOnInit(): void {
  }

}
