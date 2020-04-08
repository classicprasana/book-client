import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    let response =this.http.get("http://localhost:8085/api/mongo/book/getall");
    response.subscribe((data)=>this.books=data);
  }

}
