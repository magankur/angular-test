import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  // Table headers content
  @Input() tableHeading: any;
  // Table body content
  @Input() tableContent: any;
  // Table pagination
  @Input() pagination: any;
  
  constructor() { }

  ngOnInit() { }

}
