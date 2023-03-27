import { Component , OnInit} from '@angular/core';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    /**
     *
     */
    constructor(private booksService: BooksService) {
    }

        ngOnInit(): void {
            this.booksService.getHomePageBooks().subscribe(BooksHome => {
                this.booksPublished = BooksHome.BooksHome;
            })
            console.log(this.booksPublished);
        }


    booksPublished = [];
    collectionsAvaiable = [];
}

