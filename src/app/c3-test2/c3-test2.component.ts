import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

import * as c3 from 'c3';

@Component({
  selector: 'app-c3-test2',
  templateUrl: './c3-test2.component.html',
  styleUrls: ['./c3-test2.component.scss'],
})
export class C3Test2Component implements OnInit {

  constructor(public renderer: Renderer, public el: ElementRef) { }

  ngOnInit() {
    var chart = c3.generate({
      bindto: '#c3-test2',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250, 300, 300, 300, 300],
          ['data2', 50, 20, 10, 40, 15, 25, 30, 5, 5, 5]
        ]
      }
    });
  }

}
