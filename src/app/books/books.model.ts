import { generDTO } from "../geners/geners.model";
import { AuthorDTO } from "./author.model";
import { CollectionDTO } from "./collection.model";
import { EditorialDTO } from "./editorial.model";

export interface BooksDTO {
    title: string;
    author: AuthorDTO;
    Resume: string;
    collection: CollectionDTO;
    cover: string;
    editorial: EditorialDTO;
    geners: generDTO[];
}

export interface BooksHome{
    bookPages: BooksDTO[];
}
