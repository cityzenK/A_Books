import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit{
    constructor(){

    }

        ngOnInit(): void {

            throw new Error();
    }

    @Input()
    listado = [];

    regresiSum(n: number): number{
        let sum: number = 0;
        for (let index = 0; index <= n; index++) {
           sum += index;
        }
        return sum;
    }
    oddSum(n: number): number{
        let sum: number = 0;
        for (let  x= 0;  x <= n; x++) {
            if (Number.isInteger(x/2)) {
                sum += x;
            }
        }
        return sum
    }

    squareSum(n: number): number{
        let sum: number = 0;
        for (let  x= 0;  x <= n; x++) {
            if (Number.isInteger(x/2)) {
                sum += (Math.sqrt(x));
            }
        }
        return sum
    }

    remove(index: number){
        this.listado.splice(index, 1);
    }
}
