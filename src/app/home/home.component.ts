import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  book_info!: book;
  @Input() lenght=2;
  eventsSubject: Subject<book> = new Subject<book>();
  username: any;
  role:any;
  isEditVisible:boolean=false;
  isAddBookVisible:boolean=false;
  bookForm!:FormGroup;





  constructor(private fb:FormBuilder) {
    const books = Array.from({length: 100}, (_, k) => this.createBook(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(books);
   }
   displayedColumns!:string[];
  dataSource!: MatTableDataSource<book>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;

  ngOnInit(): void {
    this.username=sessionStorage.getItem("username");
    this.role='USER'
    this.actionsColum();
    this.createBookForm();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  actionsColum(){
    this.displayedColumns=(this.role.toLowerCase()==="admin")?['id', 'name', 'author','price','actions']:['id', 'name', 'author','price'];

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

createBookForm(){
  this.bookForm=this.fb.group({
    name: new FormControl('', [Validators.required,Validators.minLength(3)]),
    seller: new FormControl('', [Validators.required, Validators.minLength(8)]),
    author: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

}

more_info(row:book){
  this.book_info=row;
}

showEditModal(book:any){

  console.log(book.id);
  this.isEditVisible=true;
}

handleCancel(){
  this.isEditVisible=false;
}


deleteBook(book_id:number){
console.log(book_id);
}


updateBooks(){

}


showAddBooksModal(){

}




  }

