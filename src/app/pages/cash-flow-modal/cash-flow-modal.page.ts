import { CashFlow, Trade, CashService } from './../../services/cash.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-flow-modal',
  templateUrl: './cash-flow-modal.page.html',
  styleUrls: ['./cash-flow-modal.page.scss'],
})
export class CashFlowModalPage implements OnInit {

  categories = [
    { name: 'Food', icon: 'pizza' },
    { name: 'Technology', icon: 'terminal' },
    { name: 'Retail', icon: 'cart' },
    { name: 'Health', icon: 'fitness' },
    { name: 'Finance', icon: 'cash' },
    { name: 'Travel', icon: 'airplane' }
  ];

  created_at = new Date().toISOString();

  trade: Trade = {
    created_at: Date.now(),
    title: '',
    shares: 0,
    value: 0,
    valuesell: 0,
    return: 0,
    percentChange: 0,
    type: CashFlow.Trade,
    category: this.categories[0]
  };

  constructor(private modalCtrl: ModalController, private cashService: CashService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  addTrade() {
    this.trade.type = +this.trade.type;
    this.trade.created_at = new Date(this.created_at).getTime();

    
    this.trade.return = this.trade.shares* (this.trade.valuesell - this.trade.value)
    this.trade.percentChange = Math.round((this.trade.valuesell/this.trade.value - 1) * 100)
    console.log(this.trade.return)
    this.cashService.addTrade(this.trade).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Trade saved',
        duration: 1000
      });
      toast.then(toast => toast.present());
      this.modalCtrl.dismiss({reload: true});
    });

  }

  close() {
    this.modalCtrl.dismiss();
  }

}
