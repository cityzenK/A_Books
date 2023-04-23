import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.development';
import {SearchDTO, searchList} from '../search-bar/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    bookDetails = [] 


  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + '/books/search';
  private apiURLSearch = environment.apiURL + '/books/filter'; 

  public getSearch(): Observable<searchList>{
      return this.http.get<searchList>(this.apiURL);
  }

  searchBook({title}: bookTracker ): Observable <any>{
      return this.http.get<searchList>(`${this.apiURLSearch}?title=${title}`);
  }

}

export class bookTracker{
    title: string;
}
