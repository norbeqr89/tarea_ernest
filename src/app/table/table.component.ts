import { Component, OnInit } from '@angular/core';
import { sampledata } from '../../../mock/sample_data';
import { DataSample } from '../models/model-data';
import {NgForm} from '@angular/forms';
 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: any;
  headers: string[];
  keys: string[];

  count_values:number[] = [1,5,10,25,50];
  count:number = 5;
  actual_page:number = 0;
  has_prev: boolean = false;
  has_next: boolean = true;
  show_pagination: any;

  constructor() { }

  ngOnInit() {

    console.log(sampledata.length)
    console.log(this.actual_page)
    console.log(this.count)

    this.data = this.load_data(this.actual_page);
    this.headersFromKeys(this.data);
  }
  headersFromKeys(data) {
    // assuming the array is uniform
    const ele = sampledata.slice(0, 1);
    this.headers = Object.keys(ele[0]);

  }
  next()
  {
    this.actual_page = this.actual_page*this.count + this.count> sampledata.length ? this.actual_page: this.actual_page+1;
    console.log(this.actual_page)
    this.load_data(this.actual_page);
  }

  prev()
  {
    this.actual_page = this.actual_page == 0 ? 0: this.actual_page-1;
    console.log(this.actual_page)
    this.load_data(this.actual_page, );
  }

  onChange()
  {
    this.actual_page = 0;
    this.load_data(0);
  }

  load_data(page:number = 0)
  {
    console.warn(page)
    console.warn()
    this.data=  sampledata.slice((page)*this.count, (page)*this.count+this.count)
    this.has_prev = true;
    this.has_next = true;
    //this.show_pagination = 
   
    return this.data;
  }


}
