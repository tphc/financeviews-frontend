import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../stock';


@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

  @Input() stock: Stock;

  constructor() {
  }

  ngOnInit() {
  }

}
