import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  book_info !: Element;
  ngOnInit(): void {

  }

  getDetails(Element:Element){
    this.book_info = Element;

    console.log(this.book_info)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  displayedColumns = ['id', 'name', 'author', 'price'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  id: number;
  author:string ;
  price: number;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Hydrogen', price: 100, author: 'H'},
  {id: 2, name: 'Helium', price: 100, author: 'He'},
  {id: 3, name: 'Lithium', price:100, author: 'Li'},
  {id: 4, name: 'Beryllium', price: 100, author: 'Be'},
  {id: 5, name: 'Boron', price: 100, author: 'B'},
  {id: 6, name: 'Carbon', price: 100, author: 'C'},
  {id: 7, name: 'Nitrogen', price: 100, author: 'N'},
  {id: 8, name: 'Oxygen', price: 100, author: 'O'},
  {id: 9, name: 'Fluorine', price: 100, author: 'F'},
  {id: 10, name: 'Neon', price: 100, author: 'Ne'},
  {id: 11, name: 'Sodium', price: 100, author: 'Na'},
  {id: 12, name: 'Magnesium', price: 100, author: 'Mg'},
  {id: 13, name: 'Aluminum', price: 100, author: 'Al'},
  {id: 14, name: 'Silicon', price: 100, author: 'Si'},
  {id: 15, name: 'Phosphorus', price: 100, author: 'P'},
  {id: 16, name: 'Sulfur', price: 100, author: 'S'},
  {id: 17, name: 'Chlorine', price: 100, author: 'Cl'},
  {id: 18, name: 'Argon', price: 100, author: 'Ar'},
  {id: 19, name: 'Potassium', price:100, author: 'K'},
  {id: 20, name: 'Calcium', price: 100, author: 'Ca'},
];