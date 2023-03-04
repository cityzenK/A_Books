import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGenerComponent } from './geners/create-gener/create-gener.component';
import { IndexGenersComponent } from './geners/index-geners/index-geners.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'geners', component: IndexGenersComponent},
    {path: 'geners/create', component: CreateGenerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
