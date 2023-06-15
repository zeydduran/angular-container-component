import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { of } from 'rxjs'
import { DatatableService } from './datatable.service';

@Injectable({
  providedIn: 'root'
})
export class TestService extends DatatableService implements DataService {
  constructor() {
    super()
    this.setUrl('testurl')
  }

  getData() {
    return of(this);
  }
}
