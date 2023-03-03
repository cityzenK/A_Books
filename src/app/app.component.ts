import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
