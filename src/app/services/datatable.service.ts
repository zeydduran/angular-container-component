import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class DatatableService {
  private $url: string = '';

  setUrl(url: string) {
    this.$url = url;
  }
}
