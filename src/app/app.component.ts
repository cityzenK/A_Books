import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(){

    }

    ngOnInit(): void {
        this.booksPublisheds = [
            {
                name: "La sombra del Viente"
            },
            {
                name: "El principe de la Niebla"
            }
        ]
        this.collectionAvaiable = [
            {
                name: "Ciencia Ficcion"
            },
            {
                name: "Thiller"
            }
        ]
    }

    booksPublisheds = [];
    collectionAvaiable = [];

    title = 'angular-books';
    price = 14.50;
    count: number = 1;

    duplicateNumber(n: number){
        return n*2;
    }
    concatSign(price: number){
        return "Q."+price.toFixed(2);
    }

    counter(){
        this.count += 1;
    }


}
