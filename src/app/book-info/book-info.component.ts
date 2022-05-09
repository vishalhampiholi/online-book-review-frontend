import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Element } from '../home/home.component';
=======
import { Observable } from 'rxjs';
import { book } from '../home/home.component';
>>>>>>> d5545fd34bf8d2a55465464e9131dec69d22dd30

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  constructor() { }
  @Input("book")
  book_info:any;

  ngOnInit(): void {
  }

}
