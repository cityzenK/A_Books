import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BooksService} from '../books.service';
import {BooksDTO} from '../books.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute,
                private bookService: BooksService){
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params =>{
            this.bookService.getBookDetail(params['id']).subscribe(
                Details =>{
                    console.log(Details);
                    this.bookDetail = Details;
                    console.log(this.bookDetail.genersBook);
                }
            );
        });

        //Harcore truncade data
    }

    bookDetail: BooksDTO;

    getName(): string{
        return this.bookDetail.title;
    }

    getCover(): string{
        return this.bookDetail.cover;
    }

    getResume(): string{
        return this.bookDetail.resume;
    }

    getAuthor(): string{
        return this.bookDetail.author.author;
    }
}
