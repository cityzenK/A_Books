import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IndexGenersComponent } from './geners//index-geners/index-geners.component';
import { CreateGenerComponent } from './geners/create-gener/create-gener.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    GenericListComponent,
    MenuComponent,
    HomeComponent,
    IndexGenersComponent,
    CreateGenerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
