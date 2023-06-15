import { Component, OnInit } from '@angular/core';
import { dataToken } from 'src/app/services/data.token';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: 'test.html',
  providers: [
    {
      provide: dataToken,
      useClass: TestService,
    },
  ],
})
export class TestComponent implements OnInit {
  constructor(private testService: TestService) {}
  ngOnInit(): void {}
  getService() {
    return this.testService;
  }
}
