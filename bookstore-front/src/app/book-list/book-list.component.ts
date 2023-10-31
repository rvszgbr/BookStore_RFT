import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookListServiceService } from './book-list-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  myData: any;

  constructor(private bookListService: BookListServiceService) { }

  ngOnInit(): void {
    this.bookListService.getData().subscribe((data) => {
                                        this.myData = data;
                                      });
  }
}
