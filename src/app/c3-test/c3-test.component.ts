import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as c3 from 'c3';

@Component({
  selector: 'app-c3-test',
  templateUrl: './c3-test.component.html',
  styleUrls: ['./c3-test.component.scss']
})
export class C3TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var chart = c3.generate({
      bindto: '#c3-test',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    });
  }

}
