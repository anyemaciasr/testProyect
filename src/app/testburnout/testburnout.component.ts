import { Component, OnInit } from '@angular/core';
import { Test } from '../model/test';

@Component({
  selector: 'app-testburnout',
  templateUrl: './testburnout.component.html',
  styleUrls: ['./testburnout.component.css']
})
export class TestburnoutComponent implements OnInit {

  test: Test = new Test();
  constructor(  ) { }

  ngOnInit(): void {

  }

  
}
