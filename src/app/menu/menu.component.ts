import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    ngOnInit(): void {
        this.geners = ['Thiller', 'Drama', 'Comedy', 'Sci-Fy', 'Documental']
    }

    @Input()
    geners: string[];
}
