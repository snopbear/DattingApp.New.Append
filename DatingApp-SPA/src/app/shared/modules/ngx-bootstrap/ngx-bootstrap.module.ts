import { NgModule } from '@angular/core';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
    BsDatepickerModule

  ],
  declarations: [

  ]
})
export class NgxBootstrapModule { }
