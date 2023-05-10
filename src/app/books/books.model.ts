import { generDTO } from "../geners/geners.model";
import { AuthorDTO } from "./author.model";
import { sagaDTO } from "./saga.model";
import { EditorialDTO } from "./editorial.model";

export interface BooksDTO {
    bookID: number;
    title: string;
    author: AuthorDTO;
    resume: string;
    saga: sagaDTO;
    cover: string;
    editorial: EditorialDTO;
    genersBook: generDTO[];
}

export interface BooksHome{
    bookPages: BooksDTO[];
}
