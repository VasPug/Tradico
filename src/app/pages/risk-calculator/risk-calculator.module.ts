import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiskCalculatorPageRoutingModule } from './risk-calculator-routing.module';

import { RiskCalculatorPage } from './risk-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiskCalculatorPageRoutingModule
  ],
  declarations: [RiskCalculatorPage]
})
export class RiskCalculatorPageModule {}
