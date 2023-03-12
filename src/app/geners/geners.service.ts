import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {generDTO} from './geners.model';

@Injectable({
  providedIn: 'root'
})
export class GenersService {

    private apiURL = environment.apiURL + '/geners';

  constructor(private http: HttpClient) { }

  getAll(): Observable<generDTO[]>{
      return this.http.get<generDTO[]>(
          this.apiURL
      );
  }
}
