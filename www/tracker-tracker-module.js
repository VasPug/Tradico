(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tracker-tracker-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Tracker</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFilter($event)\">\n        <ion-icon name=\"funnel\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addCashflow()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list #slidingList>\n    <ion-item-sliding *ngFor=\"let trans of transactions; let i = index\">\n      <ion-item>\n        <ion-icon [name]=\"trans.category.icon\" slot=\"start\" class=\"category-icon\"></ion-icon>\n\n        <ion-label>\n          <h2>{{ trans.title }}</h2>\n          <p>\n            {{ trans.created_at | date:'MMM dd'}}\n          </p>\n        </ion-label>\n\n        <ion-text slot=\"end\" [color]=\"trans.type ? 'success' : 'danger'\">\n          {{ trans.type ? '+' : '-' }}{{ trans.value | currency:selectedCurrency:'symbol'}}\n        </ion-text>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"removeTransaction(i)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"secondary\" class=\"ion-text-center\">\n    <b>{{ cashFlow | currency:selectedCurrency:'symbol' }}</b>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/tracker/tracker.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.module.ts ***!
  \*************************************************/
/*! exports provided: TrackerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function() { return TrackerPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _tracker_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracker.page */ "./src/app/pages/tracker/tracker.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tracker_page__WEBPACK_IMPORTED_MODULE_5__["TrackerPage"]
    }
];
var TrackerPageModule = /** @class */ (function () {
    function TrackerPageModule() {
    }
    TrackerPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tracker_page__WEBPACK_IMPORTED_MODULE_5__["TrackerPage"]]
        })
    ], TrackerPageModule);
    return TrackerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tracker/tracker.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category-icon {\n  background: #e6e6e6;\n  padding: 10px;\n  border-radius: 25px;\n  color: var(--ion-color-tertiary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXNhbnRoL0Rlc2t0b3AvZmluYW5jZXMvc3JjL2FwcC9wYWdlcy90cmFja2VyL3RyYWNrZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFja2VyL3RyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FDQ3BDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhY2tlci90cmFja2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn0iLCIuY2F0ZWdvcnktaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/tracker/tracker.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.ts ***!
  \***********************************************/
/*! exports provided: TrackerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPage", function() { return TrackerPage; });
/* harmony import */ var _filter_popover_filter_popover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../filter-popover/filter-popover.page */ "./src/app/pages/filter-popover/filter-popover.page.ts");
/* harmony import */ var _services_cash_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/cash.service */ "./src/app/services/cash.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _cash_flow_modal_cash_flow_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cash-flow-modal/cash-flow-modal.page */ "./src/app/pages/cash-flow-modal/cash-flow-modal.page.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var TrackerPage = /** @class */ (function () {
    function TrackerPage(modalCtrl, cashService, plt, storage, popoverCtrl) {
        this.modalCtrl = modalCtrl;
        this.cashService = cashService;
        this.plt = plt;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
        this.selectedCurrency = '';
        this.transactions = [];
        this.allTransactions = [];
        this.cashFlow = 0;
    }
    TrackerPage.prototype.ngOnInit = function () {
    };
    TrackerPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plt.ready()];
                    case 1:
                        _a.sent();
                        this.loadTransactions();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackerPage.prototype.addCashflow = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _cash_flow_modal_cash_flow_modal_page__WEBPACK_IMPORTED_MODULE_4__["CashFlowModalPage"],
                            cssClass: 'modalCss'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        modal.onDidDismiss().then(function (res) {
                            if (res && res.data) {
                                _this.loadTransactions();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackerPage.prototype.loadTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('selected-currency').then(function (currency) {
                            _this.selectedCurrency = currency.toUpperCase();
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cashService.getTransactions().then(function (trans) {
                                _this.transactions = trans;
                                _this.allTransactions = trans;
                                console.log('transactions: ', trans);
                            })];
                    case 2:
                        _a.sent();
                        this.updateCashflow();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackerPage.prototype.removeTransaction = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.transactions.splice(i, 1);
                        this.cashService.updateTransactions(this.transactions);
                        return [4 /*yield*/, this.slidingList.closeSlidingItems()];
                    case 1:
                        _a.sent(); // Tiny Fix
                        this.updateCashflow();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackerPage.prototype.updateCashflow = function () {
        var result = 0;
        this.transactions.map(function (trans) {
            result += trans.type == _services_cash_service__WEBPACK_IMPORTED_MODULE_1__["CashFlow"].Expense ? -trans.value : trans.value;
        });
        this.cashFlow = result;
    };
    TrackerPage.prototype.openFilter = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _filter_popover_filter_popover_page__WEBPACK_IMPORTED_MODULE_0__["FilterPopoverPage"],
                            event: e
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        popover.onDidDismiss().then(function (res) {
                            if (res && res.data) {
                                var selectedName_1 = res.data.selected.name;
                                if (selectedName_1 == 'All') {
                                    _this.transactions = _this.allTransactions;
                                }
                                else {
                                    _this.transactions = _this.allTransactions.filter(function (trans) {
                                        return trans.category.name == selectedName_1;
                                    });
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrackerPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _services_cash_service__WEBPACK_IMPORTED_MODULE_1__["CashService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('slidingList'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
    ], TrackerPage.prototype, "slidingList", void 0);
    TrackerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tracker',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tracker.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tracker.page.scss */ "./src/app/pages/tracker/tracker.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_cash_service__WEBPACK_IMPORTED_MODULE_1__["CashService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], TrackerPage);
    return TrackerPage;
}());



/***/ })

}]);
//# sourceMappingURL=tracker-tracker-module.js.map