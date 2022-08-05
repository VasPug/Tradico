import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiskCalculatorPage } from './risk-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: RiskCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiskCalculatorPageRoutingModule {}
