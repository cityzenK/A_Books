import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IndexGenersComponent } from './geners//index-geners/index-geners.component';
import { CreateGenerComponent } from './geners/create-gener/create-gener.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { SearchBarComponent } from './menu/search-bar/search-bar.component';
import {FilterPipe} from './menu/search-bar/FilterPipe';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    GenericListComponent,
    MenuComponent,
    HomeComponent,
    IndexGenersComponent,
    CreateGenerComponent,
    BookDetailComponent,
    SearchBarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
