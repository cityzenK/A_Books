import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

        ngOnInit(): void {
            this.booksPublished = [
                {
                    name: "La sombra del Viente",
                    cover: "https://4.bp.blogspot.com/-c1ZZQK3r35g/Vzv_Qd91GJI/AAAAAAAAM_k/unbEDCELHboaH2nljwgK25AjuANq-KN1gCLcB/s1600/LA%2BSOMBRA%2BDEL%2BVIENTO.jpg"
                },
                {
                    name: "El principe de la Niebla",
                    cover: "https://luciagonzalez2003.files.wordpress.com/2016/10/principe-niebla-portada.jpg?w=624"
                }
            ];
            this.collectionsAvaiable = [
                {
                    name: "Ciencia Ficcion"
                },
                {
                    name: "Thiller"
                }
            ];
        }

    booksPublished = [];
    collectionsAvaiable = [];
}

