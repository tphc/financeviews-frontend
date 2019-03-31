import {Component, OnInit} from '@angular/core';
import {STOCKS} from '../mock-stocks';
import {Stock} from '../stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks = STOCKS;
  selectedStock: Stock = this.stocks[0];

  constructor() {
  }

  ngOnInit() {
  }

  onSelectstock(stock: Stock): void {
    this.selectedStock = stock;
  }
}
