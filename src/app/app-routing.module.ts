import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGenerComponent } from './geners/create-gener/create-gener.component';
import { IndexGenersComponent } from './geners/index-geners/index-geners.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'geners', component: IndexGenersComponent},
    {path: 'geners/create', component: CreateGenerComponent},
    //=====================URL parameters==========================
    {path: 'books/:id', component: BookDetailComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
