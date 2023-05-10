import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  exports: [
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatAutocompleteModule,
      MatChipsModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
