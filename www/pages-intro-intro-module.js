(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-slides pager=\"true\" #slides>\n\n    <ion-slide>\n      <h1>Welcome to Personal Finances</h1>\n      The best way to track your expenses\n      <ion-button expand=\"button\" color=\"light\" (click)=\"next()\">\n        Configure your App\n      </ion-button>\n    </ion-slide>\n\n  <ion-slide>\n      <h1>Setup Your App</h1>\n    \n      <ion-list>\n        <ion-radio-group [(ngModel)]=\"currency\">\n          <ion-list-header>Currency</ion-list-header>\n\n          <ion-item>\n            <ion-label>Euro</ion-label>\n            <ion-radio slot=\"start\" value=\"eur\"></ion-radio>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>Dollar</ion-label>\n              <ion-radio slot=\"start\" value=\"usd\"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Pound</ion-label>\n                <ion-radio slot=\"start\" value=\"gbp\"></ion-radio>\n              </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n\n      <ion-button expand=\"button\" color=\"light\" (click)=\"saveAndStart()\">\n        Get Started\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/intro/intro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro.page */ "./src/app/pages/intro/intro.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_5__["IntroPage"]
    }
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_5__["IntroPage"]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/intro/intro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  height: 100vh;\n  flex-direction: column;\n}\n\nion-content {\n  --background: var(--ion-color-primary);\n  --ion-text-color: #fff;\n}\n\nion-slides {\n  --bullet-background-active: #fff;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n\nion-radio {\n  --color-checked: #fff;\n  --color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXNhbnRoL0Rlc2t0b3AvZmluYW5jZXMvc3JjL2FwcC9wYWdlcy9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7QUNDMUI7O0FERUE7RUFDSSxzQ0FBYTtFQUNiLHNCQUFpQjtBQ0NyQjs7QURFQTtFQUNJLGdDQUEyQjtBQ0MvQjs7QURFQTtFQUNJLGtDQUFzQjtBQ0MxQjs7QURFQTtFQUNJLHFCQUFnQjtFQUNoQixhQUFRO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xufVxuXG5pb24tbGlzdCB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn0iLCJpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmY7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjZmZmO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/intro/intro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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




var IntroPage = /** @class */ (function () {
    function IntroPage(storage, router) {
        this.storage = storage;
        this.router = router;
        this.currency = 'eur';
    }
    IntroPage.prototype.ngOnInit = function () { };
    IntroPage.prototype.next = function () {
        this.slides.slideNext();
    };
    IntroPage.prototype.saveAndStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set('seen-intro', true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set('selected-currency', this.currency)];
                    case 2:
                        _a.sent();
                        this.router.navigateByUrl('/');
                        return [2 /*return*/];
                }
            });
        });
    };
    IntroPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slides'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __importDefault(__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./intro.page.scss */ "./src/app/pages/intro/intro.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-intro-intro-module.js.map