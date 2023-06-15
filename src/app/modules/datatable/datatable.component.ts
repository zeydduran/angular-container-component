import { Component, Input, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-datatable',
  template: 'datatable',
})
export class DatatableComponent implements OnInit {
  @Input() data: any;

  constructor() {


  }
  ngOnInit(): void {
    console.log(this.data);

  }
}
