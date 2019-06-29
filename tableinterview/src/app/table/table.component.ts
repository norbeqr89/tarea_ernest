import { Component, OnInit } from '@angular/core';
import { sample_data } from '../../../mock/sample_data'

@Component({
		selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

data = sample_data;

constructor() { }

	ngOnInit() {
    console.log(this.data)

	}

}
