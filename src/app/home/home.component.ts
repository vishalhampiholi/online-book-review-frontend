import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface book{
  id:number,
  name:string,
  author:string,
  price:number,
}

const Names:string[]=[
  'death',
  'something',
  'nothing',
  'inner engineering'
]

const authors:string[]=[
  'sadguru',
  'something',
  'nothing',
  'sadguru'
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  book_info!: book;

  constructor() {
    const books = Array.from({length: 100}, (_, k) => this.createBook(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(books);
   }
  displayedColumns: string[] = ['id', 'name', 'author','price'];
  dataSource!: MatTableDataSource<book>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createBook(book_id:number):book{
    const name =
    Names[Math.round(Math.random() * (Names.length - 1))] 
    

    return {
      id: book_id,
      name: name,
      author: authors[Math.round(Math.random() * (authors.length - 1))],
      price:Math.round(Math.random() * 1000)
    };
  }
more_info(row:book){
  this.book_info=row;

}

  }


