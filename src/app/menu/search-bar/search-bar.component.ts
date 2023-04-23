import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, of} from 'rxjs';
import {SearchService} from '../search-bar/search.service';
import {SearchDTO, searchList} from '../search-bar/search.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import {filter,debounceTime, switchMap, map, tap, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{


    public isLoading = false;
    public searchText: string;
    public data$ : any;

    searchForm : FormGroup;

    constructor(private searchingService: SearchService,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.searchForm = this.fb.group({
            searchBar:''
        });
    }

    search(value: any): any{
        console.log(value);
        this.isLoading = true;
        this.data$ = this.searchingService.searchBook({title: value})
        .pipe(
            map(({books}) => books),
            finalize(() => this.isLoading = false)
        ) 
    }

    Listar(lista: string[]){
        console.log('this',lista);
    }
}
