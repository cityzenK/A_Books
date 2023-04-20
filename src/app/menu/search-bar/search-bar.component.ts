import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, of} from 'rxjs';
import {SearchService} from '../search-bar/search.service';
import {SearchDTO, searchList} from '../search-bar/search.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import {filter,debounceTime, switchMap, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{

    @ViewChild('bookSearchInput') bookInput: ElementRef;

    searchForm : FormGroup;
    searchResult = [];
    bookname = [];
    searchText = '';
    searchBook :SearchDTO[] = [];


    constructor(private searchingService: SearchService,
                private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.searchingService.getSearch().subscribe(search => {
            this.searchBook = search
            const data = Object.entries(search);
            this.searchBook = data[0][1];
        });


        this.searchBook.filter(name =>{
            this.bookname.push(name.title);
        });


        this.searchForm = this.fb.group({
            searchBar:''
        });

        this.onChanges();
    }

    Listar(lista: string[]){
        console.log('this',lista);
    }

    onChanges(){
        this.searchForm.get('searchBar').valueChanges.pipe(
            filter(data => data.trim().lenght > 0),
            debounceTime(500),
            switchMap( (id:string) => {
                console.log("prueba");
                console.log('trim', id.replace(/[\s]/g, ''));
            return id ? this.searchingValue(id.replace(/[\s]/g, '')): of([]);
            })
        ).subscribe(data => {
            this.searchResult = data as Array<{}>;
        })
    }

    searchingValue(value: string){
        return of(this.searchBook.filter(title => title.title.replace(/[\s]/g,'').toLowerCase().indexOf(value.toLowerCase()) === 0))
    }
}
