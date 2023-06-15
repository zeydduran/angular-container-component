import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { DatatableService } from 'src/app/services/datatable.service';



@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DatatableComponent]
})
export class DatatableModule { }
