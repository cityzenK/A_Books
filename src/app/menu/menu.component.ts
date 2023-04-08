import { Component, OnInit } from '@angular/core';
import {generDTO} from '../geners/geners.model';
import {GenersService} from '../geners/geners.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


    genres: generDTO[];

    /**
     *
     */
    constructor(private genersService: GenersService) {
        
    }

    ngOnInit(): void {

        this.genersService.getAll().subscribe(geners =>{
            this.genres = geners.sort((a,b) => a.gener.localeCompare(b.gener));
        })
    }

}
