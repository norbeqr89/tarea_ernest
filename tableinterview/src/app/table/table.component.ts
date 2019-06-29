import { Component, OnInit } from '@angular/core';
import { sampledata } from '../../../mock/sample_data';
import { DataSample } from '../models/model-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: DataSample[] = sampledata;
  headers: string[];
  keys: string[];


  constructor() { }

  ngOnInit() {
    console.log(this.data)
    this.headersFromKeys(this.data);
  }
  headersFromKeys(data) {
    // assuming the array is uniform
    const ele = data.splice(1, 1);
    this.headers = Object.keys(ele[0]);

  }

}
