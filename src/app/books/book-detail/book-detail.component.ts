import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute){
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params =>{
            this.index = params['id'];
        });
        //Volatil data
        this.bookDetail = [
            {
                name: "La sombra del Viento",
                cover: "https://4.bp.blogspot.com/-c1ZZQK3r35g/Vzv_Qd91GJI/AAAAAAAAM_k/unbEDCELHboaH2nljwgK25AjuANq-KN1gCLcB/s1600/LA%2BSOMBRA%2BDEL%2BVIENTO.jpg",
                resume: "'Todavía recuerdo aquel amanecer en que mi padre me llevó por primera vez a visitar el Cementerio de los Libros Olvidados'. Un amanecer de 1945, un muchacho es conducido por su padre a un misterioso lugar oculto en el corazón de la ciudad vieja: el Cementerio de los Libros Olvidados. Allí, Daniel Sempere encuentra un libro maldito que cambia el rumbo de su vida y le arrastra a un laberinto de intrigas y secretos enterrados en el alma oscura de la ciudad. La Sombra del Viento es un misterio literario ambientado en la Barcelona de la primera mitad del siglo xx, desde los últimos esplendores del Modernismo hasta las tinieblas de la posguerr a.Aunando las técnicas del relato de intriga y suspense, la novela histórica y la comedia de costumbres, La Sombra del Viento es sobre todo una trágica historia de amor cuyo eco se proyecta a través del tiempo. Con gran fuerza narrativa, el autor entrelaza tramas y enigmas a modo de muñecas rusas en un inolvidable relato sobre los secretos del corazón y el embrujo de los libros cuya intriga se mantiene hasta la última página."
            },
            {
                name: "El principe de la Niebla",
                cover: "https://luciagonzalez2003.files.wordpress.com/2016/10/principe-niebla-portada.jpg?w=624",
                resume: "Un diabólico príncipe que concede cualquier deseo... a un alto precio. El nuevo hogar de los Carver está rodeado de misterio. En él aún se respira el espíritu de Jacob, el hijo de los antiguos propietarios, que murió ahogado. Las extrañas circunstancias de esa muerte sólo empiezan a aclararse con la aparición de un diabólic o personaje: el Príncipe de la Niebla."
            }
        ];
    }



    bookDetail = [];


    public index: number;

    getName(): string{
        return this.bookDetail[this.index]['name'];
    }

    getCover(): string{
        return this.bookDetail[this.index]['cover'];
    }

    getResume(): string{
        return this.bookDetail[this.index]['resume'];
    }

}
