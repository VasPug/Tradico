import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const TRANSACTION_KEY = 'trades';
const SELECTED_CURRENCY_KEY = 'selected-currency';

export enum CashFlow {
    Trade,
    TradeLoss,
}

export interface Trade {
  created_at: number,
  title: string,
  value: number,
  valuesell: number,
  shares: number,
  return: number,
  percentChange: number,
  type: CashFlow,
  category: {
    name: string,
    icon: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class CashService {

  constructor(private storage: Storage, private toastCtrl: ToastController) { }

  addTrade(trade: Trade) {
    return this.getTransactions().then(trades => {
      trades.push(trade);
      console.log('save this: ', trades)
      return this.storage.set(TRANSACTION_KEY, trades);
    });
  }

  getTransactions(): Promise<Trade[]> {
    return this.storage.get(TRANSACTION_KEY).then(res => {
      console.log('from storage: ', res);
      if (res) {
        return res.sort((trans: Trade, trans2: Trade)=> {
          return trans2.created_at -  trans.created_at;
        })
      } else {
        return [];
      }
    });
  }

  updateTransactions(trades) {
    return this.storage.set(TRANSACTION_KEY, trades);
  }

  updateCurrency(selected) {
    this.storage.set(SELECTED_CURRENCY_KEY, selected).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Market type updated',
        duration: 2000
      });
      toast.then(toast => toast.present());
    })
  }

  clearData() {
    this.storage.remove(TRANSACTION_KEY);
    let toast = this.toastCtrl.create({
      message: 'Trades cleared!',
      duration: 2000
    });
    toast.then(toast => toast.present());
  }
}
