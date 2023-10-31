import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookListServiceService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('http://localhost:8080/bookstore-back/api/books');
  }
}
