import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as c3 from 'c3';

@Component({
  selector: 'app-c3-test3',
  templateUrl: './c3-test3.component.html',
  styleUrls: ['./c3-test3.component.scss']
})
export class C3Test3Component implements OnInit {

  // get the reference of dataForm => <form #dataForm="ngForm">
  // @ViewChild('dataForm') dataForm: NgForm;
  
  // input of dataForm
  private input = '';
  // private inputInvalid = false;

  // data submitted by dataForm
  private data: number[] = [];

  // c3Chart
  private chart;

  constructor() { }

  ngOnInit() {
    this.chart = c3.generate({
      bindto: '#c3-test3',
      data: {
        columns: [
          // ['data1', 30, 200, 100, 400, 150, 250, 300, 300, 300, 300]
        ]
      }
    });
  }

  private onSubmit(dataForm: NgForm) {
    if (dataForm.invalid) {
      return;
    }

    let inputNum = Number(this.input);

    this.data.push(inputNum);
    this.updateChart();
    dataForm.reset();
  }

  private deleteNum(index) {
    this.data.splice(index, 1);
    this.updateChart();
  }

  private updateChart() {
    let c3Data: any[] = ['data'];
    this.data.forEach( d => c3Data.push(d) );

    this.chart.load({
      columns: [
        c3Data
      ]
    });
  }

  private filterFloat = function (value) {
    if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
    return NaN;
  }


  isFocus = false;
  onBlur() {
    this.isFocus = false;
  }
  onFocus() {
    this.isFocus = true;
  }

}
