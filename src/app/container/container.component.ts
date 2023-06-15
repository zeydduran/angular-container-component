import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { dataToken } from '../services/data.token';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  data$: Observable<string>;

  constructor(
    @Inject(dataToken)
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data$ = this.dataService.getData();
  }
}
