import { Component, OnInit } from '@angular/core';
import { GenersService } from '../geners.service';

@Component({
  selector: 'app-index-geners',
  templateUrl: './index-geners.component.html',
  styleUrls: ['./index-geners.component.css']
})
export class IndexGenersComponent implements OnInit{

    constructor(private genersService: GenersService){

    }


    ngOnInit(): void {
        this.genersService.getAll().subscribe(geners =>{
            console.log(geners)
        })
    }

    public data_geners: string[];
}
