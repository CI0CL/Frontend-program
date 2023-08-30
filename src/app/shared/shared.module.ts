import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SquareImageComponent } from './square-image/square-image.component';

@NgModule({
  declarations: [FormComponent, SearchComponent, SquareImageComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormComponent,
    SquareImageComponent
  ],
})
export class SharedModule {
}
