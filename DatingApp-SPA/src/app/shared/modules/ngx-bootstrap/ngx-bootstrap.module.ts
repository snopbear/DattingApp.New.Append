import { NgModule } from '@angular/core';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  exports: [
    BsDatepickerModule,
    DatepickerModule
  ],
  declarations: [

  ]
})
export class NgxBootstrapModule { }
