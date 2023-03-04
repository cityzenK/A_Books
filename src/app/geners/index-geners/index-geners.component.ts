import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-geners',
  templateUrl: './index-geners.component.html',
  styleUrls: ['./index-geners.component.css']
})
export class IndexGenersComponent implements OnInit{


    ngOnInit(): void {
        this.data_geners = ['Thiller', 'Drama', 'Comedy', 'Sci-Fy', 'Documental']
    }

    public data_geners: string[];
}
