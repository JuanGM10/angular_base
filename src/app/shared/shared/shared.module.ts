import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
export const DateFormat = {
  parse: {
      dateInput: 'DD/MM/YYYY'
  },
  display: {
      dateInput: 'input',
      monthYearLabel: 'input',
      dateA11yLabel: 'DD/MM/YYYY',
      monthYearA11yLabel: 'MMMM YYYY'
  }
};



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  providers:[
    DatePipe,
    { provide: MAT_DATE_FORMATS, useValue: DateFormat },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDatatableModule,
  ]
})
export class SharedModule { }
