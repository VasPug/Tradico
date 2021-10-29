import { FilterPopoverPage } from './../filter-popover/filter-popover.page';
import { CashService, Trade, CashFlow } from './../../services/cash.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform, IonList, PopoverController } from '@ionic/angular';
import { CashFlowModalPage } from '../cash-flow-modal/cash-flow-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {

  selectedCurrency = '';
  trades: Trade[] = [];
  allTransactions: Trade[] = [];

  cashFlow = 0;
  color = "success"

  @ViewChild('slidingList') slidingList: IonList

  constructor(private modalCtrl: ModalController, private cashService: CashService, 
    private plt: Platform, private storage: Storage, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.plt.ready();
    this.loadTransactions();
  }

  async addCashflow() {
    let modal = await this.modalCtrl.create({
      component: CashFlowModalPage,
      cssClass: 'modalCss'
    });
    modal.present();

    modal.onDidDismiss().then(res => {
      if (res && res.data) {
        this.loadTransactions();
      }
    })
  }

  async loadTransactions() {
    await this.storage.get('selected-currency').then(currency => {
      this.selectedCurrency = currency.toUpperCase();
    });

    await this.cashService.getTransactions().then(trans => {
      this.trades = trans;
      this.allTransactions = trans;
      console.log('trades: ', trans);
    });

    this.updateCashflow();
  }

  async removeTransaction(i) {
    this.trades.splice(i, 1);
    this.cashService.updateTransactions(this.trades);
    await this.slidingList.closeSlidingItems(); // Tiny Fix
    this.updateCashflow();
  }

  updateCashflow() {
    let result = 0;
    this.trades.map(trans => {
      result += trans.type == CashFlow.Trade ? trans.return : trans.return;
    });

    this.cashFlow = result;
    console.log(this.cashFlow)
    if (this.cashFlow > 0){
      this.color = "success"
    }else if(this.cashFlow < 0){
      this.color = "error"
    }else{
      this.color = "grey"
    }

  }

  async openFilter(e) {
    const popover = await this.popoverCtrl.create({
      component: FilterPopoverPage,
      event: e
    });
    await popover.present();

    popover.onDidDismiss().then(res => {
      if (res && res.data) {
        let selectedName = res.data.selected.name;

        if (selectedName == 'All') {
          this.trades = this.allTransactions;
        } else {
          this.trades = this.allTransactions.filter(trans => {
            return trans.category.name == selectedName;
          });
        }
      }
    })
  }

}