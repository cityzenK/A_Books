import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {BooksHome, BooksDTO} from '../books/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/books'


  public getHomePageBooks(): Observable<BooksHome>{
      return this.http.get<BooksHome>(this.apiURL);
  }


  public getBookDetail(id: number): Observable<BooksDTO> {
      return this.http.get<BooksDTO>(`${this.apiURL}/${id}`);
  }

}
