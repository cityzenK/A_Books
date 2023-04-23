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
            this.booksService.getHomePageBooks().subscribe(
                booksHome => {
                    const data = Object.entries(booksHome);
                    this.booksPublished = data[0][1];
                    console.log(this.booksPublished);
            })

            this.display();
        }


    booksPublished = [];
    collectionsAvaiable = [];


    display(){
        console.log("Outside the OnInit");
        console.log(this.booksPublished);
    }
}

