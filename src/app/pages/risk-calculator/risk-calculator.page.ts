import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-calculator',
  templateUrl: './risk-calculator.page.html',
  styleUrls: ['./risk-calculator.page.scss'],
})
export class RiskCalculatorPage implements OnInit {

  constructor() { }


  percentRisk;
  totalCash;
  ticker;
  ATR;
  price;
  

  ammountRisked;
  totalRisk;
  sharesYouCanBuy;
  stopLoss;
  limitSell;


  ngOnInit() {
  }

  /**
  
  # How it works (Steps)
  # 1. Enter your extra cash lying around in your broker account(NOT YOUR ACCOUNT TOTAL). This is what the 2% risk will be calculated by.
  # 2. Enter the first stock ticker you are looking to buy
  # 3. Enter the estimated limit price of the stock you are planning to buy at
  # 4. Enter the average trading range of the stock(the amount it moves daily) which can be found from this website - https://csimarket.com/stocks/technicals_average.php?code=TWTR&koga=atr 
  # 5. A list of the calculation for that ticker will appear and steps 2-4 will repeat again
  # 6. To get out of the infinite loop of questions - type "DONE" or "done" in the TICKER input. 
  # 7. A final list of calculations should appear as well as the total amount of cash at risk and your cash balance after you purchase the stocks.

  */

  analyseRisk(){
    this.ammountRisked = (this.totalCash) * (this.percentRisk/100)
    this.sharesYouCanBuy = Math.round(this.ammountRisked/this.ATR)
    this.stopLoss = (this.price - this.ammountRisked/this.sharesYouCanBuy).toFixed(2)
    this.limitSell = (this.price + (this.ammountRisked * 1.5)/this.sharesYouCanBuy).toFixed(2)
  }
  






    



}
