import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';

import { FormsModule } from '@angular/forms';
import { StockDataComponent } from './stock-data/stock-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
