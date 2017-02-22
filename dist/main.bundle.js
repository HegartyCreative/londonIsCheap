webpackJsonp([0,3],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(452);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/main.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivitiesComponent = (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
    };
    ActivitiesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-activities',
            template: __webpack_require__(629),
            styles: [__webpack_require__(617)]
        }), 
        __metadata('design:paramtypes', [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/activities.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(630),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__food_food_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__intro_intro_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__links_links_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activities_activities_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attractions_attractions_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__events_events_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shopping_shopping_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__travel_travel_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__(456);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__food_food_component__["a" /* FoodComponent */],
                __WEBPACK_IMPORTED_MODULE_8__intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_9__links_links_component__["a" /* LinksComponent */],
                __WEBPACK_IMPORTED_MODULE_10__activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__attractions_attractions_component__["a" /* AttractionsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shopping_shopping_component__["a" /* ShoppingComponent */],
                __WEBPACK_IMPORTED_MODULE_14__travel_travel_component__["a" /* TravelComponent */],
                __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttractionsComponent = (function () {
    function AttractionsComponent() {
    }
    AttractionsComponent.prototype.ngOnInit = function () {
    };
    AttractionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-attractions',
            template: __webpack_require__(631),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], AttractionsComponent);
    return AttractionsComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/attractions.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__(632),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventsComponent);
    return EventsComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/events.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoodComponent = (function () {
    function FoodComponent() {
    }
    FoodComponent.prototype.ngOnInit = function () {
    };
    FoodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-food',
            template: __webpack_require__(633),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], FoodComponent);
    return FoodComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/food.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(634),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/footer.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(635),
            styles: [__webpack_require__(623)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/header.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__(636),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroComponent);
    return IntroComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/intro.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinksComponent = (function () {
    function LinksComponent() {
    }
    LinksComponent.prototype.ngOnInit = function () {
    };
    LinksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-links',
            template: __webpack_require__(637),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [])
    ], LinksComponent);
    return LinksComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/links.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__(638),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/nav.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingComponent = (function () {
    function ShoppingComponent() {
    }
    ShoppingComponent.prototype.ngOnInit = function () {
    };
    ShoppingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-shopping',
            template: __webpack_require__(639),
            styles: [__webpack_require__(627)]
        }), 
        __metadata('design:paramtypes', [])
    ], ShoppingComponent);
    return ShoppingComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/shopping.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TravelComponent = (function () {
    function TravelComponent() {
    }
    TravelComponent.prototype.ngOnInit = function () {
    };
    TravelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-travel',
            template: __webpack_require__(640),
            styles: [__webpack_require__(628)]
        }), 
        __metadata('design:paramtypes', [])
    ], TravelComponent);
    return TravelComponent;
}());
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/travel.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/environment.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/adobe/Desktop/londonIsCheap/src/polyfills.js.map

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "#footer{\n    margin-bottom: 100px;\n    border-top: 1px solid #dc143c;\n    padding-top: 50px;\n}\n\n    h3, p{\n        margin: 0;\n        padding: 0;\n    }\n\n    h3{\n        text-transform: uppercase;\n        font-size: 2rem;\n        color: #dc143c;\n        line-height: 2.5rem;\n        font-weight: 700;\n    }\n\n    p{\n        color: #313030;\n        font-size: 1.8rem;\n        line-height: 2.65rem;\n    }\n\n    a{\n        color: #dc143c;\n    }\n\n\n\n.rrssb-buttons{box-sizing:border-box;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;height:36px;margin:0;padding:0;width:100%}.rrssb-buttons:after{clear:both}.rrssb-buttons:after,.rrssb-buttons:before{content:' ';display:table}.rrssb-buttons li{box-sizing:border-box;float:left;height:100%;line-height:13px;list-style:none;margin:0;padding:0 2px}.rrssb-buttons li.rrssb-email a{background-color:#0a88ff}.rrssb-buttons li.rrssb-email a:hover{background-color:#006ed6}.rrssb-buttons li.rrssb-facebook a{background-color:#306199}.rrssb-buttons li.rrssb-facebook a:hover{background-color:#244872}.rrssb-buttons li.rrssb-tumblr a{background-color:#32506d}.rrssb-buttons li.rrssb-tumblr a:hover{background-color:#22364a}.rrssb-buttons li.rrssb-linkedin a{background-color:#007bb6}.rrssb-buttons li.rrssb-linkedin a:hover{background-color:#005983}.rrssb-buttons li.rrssb-twitter a{background-color:#26c4f1}.rrssb-buttons li.rrssb-twitter a:hover{background-color:#0eaad6}.rrssb-buttons li.rrssb-googleplus a{background-color:#e93f2e}.rrssb-buttons li.rrssb-googleplus a:hover{background-color:#ce2616}.rrssb-buttons li.rrssb-youtube a{background-color:#df1c31}.rrssb-buttons li.rrssb-youtube a:hover{background-color:#b21627}.rrssb-buttons li.rrssb-reddit a{background-color:#8bbbe3}.rrssb-buttons li.rrssb-reddit a:hover{background-color:#62a3d9}.rrssb-buttons li.rrssb-pinterest a{background-color:#b81621}.rrssb-buttons li.rrssb-pinterest a:hover{background-color:#8a1119}.rrssb-buttons li.rrssb-pocket a{background-color:#ed4054}.rrssb-buttons li.rrssb-pocket a:hover{background-color:#e4162d}.rrssb-buttons li.rrssb-github a{background-color:#444}.rrssb-buttons li.rrssb-github a:hover{background-color:#2b2b2b}.rrssb-buttons li.rrssb-instagram a{background-color:#125688}.rrssb-buttons li.rrssb-instagram a:hover{background-color:#0c3a5b}.rrssb-buttons li.rrssb-delicious a{background-color:#0b79e5}.rrssb-buttons li.rrssb-delicious a:hover{background-color:#095fb4}.rrssb-buttons li.rrssb-vk a{background-color:#4d71a9}.rrssb-buttons li.rrssb-vk a:hover{background-color:#3d5a86}.rrssb-buttons li.rrssb-hackernews a{background-color:#f60}.rrssb-buttons li.rrssb-hackernews a:hover{background-color:#cc5200}.rrssb-buttons li.rrssb-whatsapp a{background-color:#43d854}.rrssb-buttons li.rrssb-whatsapp a:hover{background-color:#28c039}.rrssb-buttons li.rrssb-print a{background-color:#8d98a2}.rrssb-buttons li.rrssb-print a:hover{background-color:#717f8b}.rrssb-buttons li a{background-color:#ccc;border-radius:2px;box-sizing:border-box;display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:700;height:100%;padding:11px 7px 12px 27px;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;-webkit-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out;width:100%}.rrssb-buttons li a .rrssb-icon{display:block;left:10px;padding-top:9px;position:absolute;top:0;width:10%}.rrssb-buttons li a .rrssb-icon svg{height:17px;width:17px}.rrssb-buttons li a .rrssb-icon svg path{fill:#fff}.rrssb-buttons li a .rrssb-text{color:#fff}.rrssb-buttons li a:active{box-shadow:inset 1px 3px 15px 0 rgba(22,0,0,.25)}.rrssb-buttons li.small a{padding:0}.rrssb-buttons li.small a .rrssb-icon{left:auto;margin:0 auto;overflow:hidden;position:relative;top:auto;width:100%}.rrssb-buttons li.small a .rrssb-text{visibility:hidden}.rrssb-buttons.large-format,.rrssb-buttons.large-format li{height:auto}.rrssb-buttons.large-format li a{-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:.2em;padding:8.5% 0 8.5% 12%}.rrssb-buttons.large-format li a .rrssb-icon{height:100%;left:7%;padding-top:0;width:12%}.rrssb-buttons.large-format li a .rrssb-icon svg{height:100%;position:absolute;top:0;width:100%}.rrssb-buttons.large-format li a .rrssb-text{-webkit-backface-visibility:hidden;backface-visibility:hidden}.rrssb-buttons.small-format{padding-top:5px}.rrssb-buttons.small-format li{height:80%;padding:0 1px}.rrssb-buttons.small-format li a .rrssb-icon{height:100%;padding-top:0}.rrssb-buttons.small-format li a .rrssb-icon svg{height:48%;position:relative;top:6px;width:80%}.rrssb-buttons.tiny-format{height:22px;position:relative}.rrssb-buttons.tiny-format li{padding-right:7px}.rrssb-buttons.tiny-format li a{background-color:transparent;padding:0}.rrssb-buttons.tiny-format li a .rrssb-icon svg{height:70%;width:100%}.rrssb-buttons.tiny-format li a:active,.rrssb-buttons.tiny-format li a:hover{background-color:transparent}.rrssb-buttons.tiny-format li.rrssb-email a .rrssb-icon svg path{fill:#0a88ff}.rrssb-buttons.tiny-format li.rrssb-email a .rrssb-icon:hover .rrssb-icon svg path{fill:#0054a3}.rrssb-buttons.tiny-format li.rrssb-facebook a .rrssb-icon svg path{fill:#306199}.rrssb-buttons.tiny-format li.rrssb-facebook a .rrssb-icon:hover .rrssb-icon svg path{fill:#18304b}.rrssb-buttons.tiny-format li.rrssb-tumblr a .rrssb-icon svg path{fill:#32506d}.rrssb-buttons.tiny-format li.rrssb-tumblr a .rrssb-icon:hover .rrssb-icon svg path{fill:#121d27}.rrssb-buttons.tiny-format li.rrssb-linkedin a .rrssb-icon svg path{fill:#007bb6}.rrssb-buttons.tiny-format li.rrssb-linkedin a .rrssb-icon:hover .rrssb-icon svg path{fill:#003650}.rrssb-buttons.tiny-format li.rrssb-twitter a .rrssb-icon svg path{fill:#26c4f1}.rrssb-buttons.tiny-format li.rrssb-twitter a .rrssb-icon:hover .rrssb-icon svg path{fill:#0b84a6}.rrssb-buttons.tiny-format li.rrssb-googleplus a .rrssb-icon svg path{fill:#e93f2e}.rrssb-buttons.tiny-format li.rrssb-googleplus a .rrssb-icon:hover .rrssb-icon svg path{fill:#a01e11}.rrssb-buttons.tiny-format li.rrssb-youtube a .rrssb-icon svg path{fill:#df1c31}.rrssb-buttons.tiny-format li.rrssb-youtube a .rrssb-icon:hover .rrssb-icon svg path{fill:#84111d}.rrssb-buttons.tiny-format li.rrssb-reddit a .rrssb-icon svg path{fill:#8bbbe3}.rrssb-buttons.tiny-format li.rrssb-reddit a .rrssb-icon:hover .rrssb-icon svg path{fill:#398bcf}.rrssb-buttons.tiny-format li.rrssb-pinterest a .rrssb-icon svg path{fill:#b81621}.rrssb-buttons.tiny-format li.rrssb-pinterest a .rrssb-icon:hover .rrssb-icon svg path{fill:#5d0b11}.rrssb-buttons.tiny-format li.rrssb-pocket a .rrssb-icon svg path{fill:#ed4054}.rrssb-buttons.tiny-format li.rrssb-pocket a .rrssb-icon:hover .rrssb-icon svg path{fill:#b61124}.rrssb-buttons.tiny-format li.rrssb-github a .rrssb-icon svg path{fill:#444}.rrssb-buttons.tiny-format li.rrssb-github a .rrssb-icon:hover .rrssb-icon svg path{fill:#111}.rrssb-buttons.tiny-format li.rrssb-instagram a .rrssb-icon svg path{fill:#125688}.rrssb-buttons.tiny-format li.rrssb-instagram a .rrssb-icon:hover .rrssb-icon svg path{fill:#061d2e}.rrssb-buttons.tiny-format li.rrssb-delicious a .rrssb-icon svg path{fill:#0b79e5}.rrssb-buttons.tiny-format li.rrssb-delicious a .rrssb-icon:hover .rrssb-icon svg path{fill:#064684}.rrssb-buttons.tiny-format li.rrssb-vk a .rrssb-icon svg path{fill:#4d71a9}.rrssb-buttons.tiny-format li.rrssb-vk a .rrssb-icon:hover .rrssb-icon svg path{fill:#2d4263}.rrssb-buttons.tiny-format li.rrssb-hackernews a .rrssb-icon svg path{fill:#f60}.rrssb-buttons.tiny-format li.rrssb-hackernews a .rrssb-icon:hover .rrssb-icon svg path{fill:#993d00}.rrssb-buttons.tiny-format li.rrssb-whatsapp a .rrssb-icon svg path{fill:#43d854}.rrssb-buttons.tiny-format li.rrssb-whatsapp a .rrssb-icon:hover .rrssb-icon svg path{fill:#1f962d}.rrssb-buttons.tiny-format li.rrssb-print a .rrssb-icon svg path{fill:#8d98a2}.rrssb-buttons.tiny-format li.rrssb-print a .rrssb-icon:hover .rrssb-icon svg path{fill:#5a656f}.rrssb-buttons li.rrssb-print a .rrssb-icon svg path:nth-child(2){fill:none}\n\n\n.rrssb-linkedin,\n.rrssb-github,\n.rrssb-twitter,\n.rrssb-email{\n    width: 100%;\n}\n\n.social_icons ul li{\n    margin-bottom: 5px;\n}\n\n.rrssb-buttons li.rrssb-email a,\n.rrssb-buttons li.rrssb-twitter a,\n.rrssb-buttons li.rrssb-linkedin a,\n.rrssb-buttons li.rrssb-github a{\n    background-color:  #dc143c;\n}\n\n.rrssb-buttons li a .rrssb-text{\n    font-size: 14px;\n}"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "#carousel{\n  margin-top: 80px;\n}\n\n.navbar-default .navbar-nav > li.quote > a{\n  color: #dc143c;\n}\n\n.carousel-caption{\nright: 5%;\nleft: 5%;\n}\n\n.carousel-caption h3{\n  font-family: 'Lato', sans-serif;\n  line-height: 3rem;\n  font-weight: 700;\n  letter-spacing: 0.075rem;\n}\n\n.carousel-caption p{\n  font-size: 1.8rem;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.075rem;\n}\n\n.carousel-fade .carousel-inner .item {\n  opacity: 0;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n  interval : 5000;\n  pause: false;\n  overflow: hidden;\n}\n\n.item.active img {\n    -webkit-transition: -webkit-transform 5000ms linear 0s;\n    transition: -webkit-transform 5000ms linear 0s;\n    transition: transform 5000ms linear 0s;\n    transition: transform 5000ms linear 0s, -webkit-transform 5000ms linear 0s;\n    /* This should be based on your carousel setting. For bs, it should be 5second*/\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n}\n.carousel-fade .carousel-inner .active {\n  opacity: 1;\n}\n\n.carousel-fade .carousel-inner .active.left,\n.carousel-fade .carousel-inner .active.right {\n  left: 0;\n  opacity: 0;\n  z-index: 1;\n}\n\n.carousel-fade .carousel-control {\n  z-index: 2;\n}\n\n.right.carousel-control, .left.carousel-control {\n    display: none;\n}\n\n\n/*\nWHAT IS NEW IN 3.3: \"Added transforms to improve carousel performance in modern browsers.\"\nnow override the 3.3 new styles for modern browsers & apply opacity\n*/\n@media all and (transform-3d), (-webkit-transform-3d) {\n    .carousel-fade .carousel-inner > .item.next,\n    .carousel-fade .carousel-inner > .item.active.right\n    \n     {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n    .carousel-fade .carousel-inner > .item.prev,\n    .carousel-fade .carousel-inner > .item.active.left {\n      opacity: 0;\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n    .carousel-fade .carousel-inner > .item.next.left,\n    .carousel-fade .carousel-inner > .item.prev.right,\n    .carousel-fade .carousel-inner > .item.active {\n      opacity: 1;\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n    }\n}"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = ".intro{\n    margin-top: 50px;\n}\n\n    .intro p{\n    text-align: center;\n    font-size: 1.9rem;\n    margin-left: 15%;\n    margin-right: 15%;\n    }\n\n    .intro span{\n    font-weight: bold;\n    color: #dc143c;\n    font-size: 2.4rem;\n    }\n\n    .intro a{\n    color: #dc143c;\n    }\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = ".main_links{\n    padding-top: 20px;\n}\n\n.pic {\n    position: relative;\n    width: 100%;\n    height: auto;\n    overflow: hidden;\n}\n\n.pic h2{\n    color: #fff;\n    padding-top: 70px;\n    font-size: 3rem;\n    letter-spacing: 0.1rem;\n    font-family: 'Lato', sans-serif;\n    }\n\n\n.text {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 0;\n    text-align: center;\n    background: rgba(220, 20, 60, 0.8);\n    -webkit-transition: height 0.7s ease-out;\n    transition: height 0.7s ease-out;\n}\n\n.pic:hover > .text {\n    height: 205px;\n}"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = ".navbar-default{\n    background-color: #ffffff;\n    text-transform: uppercase;\n    position: fixed;\n    width: 100%;\n    z-index: 200;\n}\n\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container ind_sections\" id=\"activities\">\n        <div class=\"row\">\n            <div class=\"col-md-12 section_image \"><img class=\"img-responsive icon_section\" src=\"./../../assets/images/activities.svg\"></div>\n            </div>\n        <div class=\"row\">\n            <div class=\"section_heading col-md-12\"><h2>Activities</h2></div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Go skate boarding</h3>\n                <p>London is full of free skate parks: take advantage of one. Either try it yourself or, if you’ve realised you’re too ancient now, prove yourself the cool aunt/uncle by being in the know. Check out the <a href=\"http://www.londonskateparks.co.uk\" target=\"_blank\">website</a>.</p>\n                <p>Alternatively, if you fancy getting involved street skating and taking to public roads, then check out the <a href=\"http://www.londonskate.com/introduction/\" target=\"_blank\">London Skate website</a>.</p>\n\n                <h3>Stretch out with some Yoga</h3>\n                <p>Those who need some respite from the grind of life can drop into <a href=\"http://www.innerspace.org.uk\" target=\"_blank\">Inner Space</a> for free lunchtime and evening meditation and positive thinking classes.</p>\n                <p>Everyone deserves a little 'me time'. Besides, this is cheaper and healthier than a box of wine.</p>\n\n                <h3>Learn to swing dance</h3>\n                <p><a href=\"http://www.swingpatrol.co.uk/class/stompin-the-blues\" target=\"_blank\">Swing Patrol</a> is London’s biggest swing school, popping up in dozens of locations all over town. Classes cost £10 a person, and additional classes on the same night cost just a fiver. There are lessons for total beginners, improvers and experienced dancers.</p>\n\n                <h3>Paddle down the Thames</h3>\n                <p>Touring the Thames from a passenger boat is a little too staid for some. Thankfully, <a href=\"http://www.londonkayaktours.co.uk/Sales\" target=\"_blank\">London Kayak Tours</a> give you the opportunity to paddle your way past the Palace of Westminster, Big Ben and all of London’s other top landmarks under your own steam.</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>Get on your skates</h3>\n                <p>The summer is coming so grab your roller skates for a group blade across the city. The route can vary, but groups always meet nearby the Achilles Statue in Hyde Park. They offer both a Friday night skate for those pretty confident on wheels, and a Sunday stroll for those looking to take things a little easier.</p>\n                <p>This <a href=\"http://www.lfns.co.uk\" target=\"_blank\">website</a> will give you all the information you need.</p>\n\n                <h3>The Monument challenge</h3>\n                <p>Get fit in your lunch break by climbing the tallest isolated column in the world. It takes around 10 minutes to get to the top of <a href=\"http://www.themonument.org.uk\" target=\"_blank\">The Monument</a>, but see if you can beat the record of 2 minutes, 40 seconds. You get a certificate at the end to prove your athletic prowess and the chance to say you’ve exercised inside a Christopher Wren-designed landmark, all while burning calories. £4 cash only, just turn up.</p>\n\n                <h3>Go rock climbing</h3>\n                <p>If you have a head for heights, then rock climbing at one of the city’s many climbing walls is a fun way to spend the afternoon. There's the <a href=\"http://www.archclimbingwall.com/#intro\" target=\"_blank\">Arch in Bermondsey</a>, the <a href=\"https://www.mileendwall.org.uk\" target=\"_blank\">Mile End Climbing Wall</a> and the <a href=\"https://www.castle-climbing.co.uk\" target=\"_blank\">Castle at Archway</a>.</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>Cycling around London</h3>\n                <p>If you’re feeling energetic you can hire a bike from the <a href=\"https://tfl.gov.uk/modes/cycling/santander-cycles\" target=\"_blank\">Santander Cycles</a> hire scheme (aka a Boris bike). You can pick them up from docking stations all around central London and they cost £2 to access the bikes for 24 hours then you can make as many journeys under 30 minutes as you like for free.</p>\n\n                <h3>Spend the day at Ally Pally</h3>\n                <p><a href=\"http://www.alexandrapalace.com\" target=\"_blank\">Alexandra Palace</a> offers every outdoorsy pursuit from pedalos to pitch ‘n’ putt. If you’re feeling especially energetic you can go on a Segway rally, swing through the trees or visit the ice rink, or, if you’re feeling sluggish, just grab a jug of Pimm’s and enjoy the view.</p>\n\n                <h3>Play an urban wide game</h3>\n                <p><a href=\"http://games.fire-hazard.net\" target=\"_blank\">Fire Hazard Games</a> organise urban wide games with cryptic clues and real life guards including the ever-popular City Dash. Tickets are cheaper the further you book in advance, and start from £10.</p>\n            </div> <!-- End of col 3 md -->\n        </div> <!-- End of row -->\n    </div> <!-- End of container -->"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-header></app-header>\n<app-intro></app-intro>\n<app-links></app-links>\n<app-food></app-food>\n<app-activities></app-activities>\n<app-attractions></app-attractions>\n<app-events></app-events>\n<app-shopping></app-shopping>\n<app-travel></app-travel>\n<app-footer></app-footer>"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = " <div class=\"container ind_sections\" id=\"attractions\">\n        <div class=\"row\">\n            <div class=\"col-md-12 section_image \"><img class=\"img-responsive icon_section\" src=\"./../../assets/images/attractions.svg\"></div>\n            </div>\n        <div class=\"row\">\n            <div class=\"section_heading col-md-12\"><h2>Attractions</h2></div>\n            </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 \">\n                <h3>Step into the past</h3>\n                <p>Many places claim to show what life was like once upon a time, but the understated <a href=\"http://www.geffrye-museum.org.uk\" target=\"_blank\">Geffrye Museum</a> perhaps does it most authentically. Wander between rooms dressed as they would have been decades ago. What’s most intriguing is not simply seeing a room from the 1930s, or sometime in the 1800s, but the difference between them, the changing taste, and what’s lasted from then to now. They also have beautiful gardens.</p>\n\n                <h3>Fun at the Science Museum</h3>\n                <p>Rightly beloved, the <a href=\"http://www.sciencemuseum.org.uk\" target=\"_blank\">Science Museum</a> is practically an oversize treasure chest. Just everyone has to make a visit. Everything is designed to be explored and involved with. In short, it’s a place for the curious. Exhibits change regularly, but must-sees include their space display, which includes rockets, satellites and probes, and Who Am I?, which is a chance for everyone to indulge in themselves, and to see how we all got here, why, and what makes us human.</p>\n\n                <h3>Changing the Guard</h3>\n                <p>This event is so wonderfully, absurdly British that we all tend to ignore it while Americans stare on proudly. But it’s a spectacle, so stop by, just once.</p>\n                <p>It lasts about 45 minutes and as it’s a tradition that’s lasted since 1660, it’s certainly got staying power. Check out the <a href=\"http://changing-guard.com/dates-buckingham-palace.html\" target=\"_blank\">website</a> for all you information you’ll need.</p>\n\n                <h3>Richmond Park</h3>\n                <p><a href=\"https://www.royalparks.org.uk\" target=\"_blank\">Richmond Park</a> is the largest of London’s eight Royal Parks, an extraordinary space where the grass seems greener, the flowers seem to smell better and the sun seems warmer. The park has a magic that’s not tangible – go to the Isabella plantation to see what we mean. It is a National Nature Reserve, London’s largest Site of Special Scientific Interest and a European Special Area of Conservation. The red and fallow deer that live in the park will bring a moment of silence to your day.</p>\n\n                <h3>Hackney City Farm</h3>\n                <p>A chance to see adorable animals without paying a penny? Don’t pass this opportunity up. Besides pigs, donkeys, goats, rabbits, guinea pigs, sheep, geese and more, they also offer pottery and mosaic classes. This is great day out for the kids, view the <a href=\"http://hackneycityfarm.co.uk\" target=\"_blank\">website</a>.</p>\n\n                <h3>The secret Japanese gardens</h3>\n                <p>You needn’t be tired of London to want to get away from it every once in awhile. The <a href=\"https://www.rbkc.gov.uk/leisure-and-culture/parks/holland-park\" target=\"_blank\">Kyoto gardens</a> in Holland Park offer a moment of Japanese calm.</p>\n                <p>It’s beautiful, striking, and a world away from just about everywhere else in London.</p>\n\n                <h3>Cheap cinema tickets</h3>\n                <p>If you want to see a film in London, then stay away from the expensive, crowded cinemas in Leicester Square. Just up the road, the <a href=\"https://princecharlescinema.com/PrinceCharlesCinema.dll/Home\" target=\"_blank\">Prince Charles Cinema</a> shows films from £8 on weekdays. Or if you’ll be in town for a while you can become a member for £10 and get discounted tickets.</p>\n\n                <h3>Visit the Cutty Sark</h3>\n                <p>The <a href=\"http://www.rmg.co.uk/cutty-sark\" target=\"_blank\">Cutty Sark</a> in Greenwich is a great day out. Visit the legendary 19th century ship now stands raised above a specially-designed viewing chamber, so you can walk right under it. It also runs a varied programme of events, including comedy, music, life drawing, silent discos and film. Check out what’s on <a href=\"http://www.rmg.co.uk/cutty-sark/theatre\" target=\"_blank\">here</a>.</p>\n\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>London’s quirkiest museum</h3>\n                <p>Something about <a href=\"http://www.soane.org\" target=\"_blank\">Sir John Soane’s museum</a> is unlike any other: once the home of the famous neo-classical architect, the gorgeous residence has everything from curious antiquities collected on his travels, Greek and Roman bronzes, art by the likes of Canaletto, Turner and Hogarth.</p>\n                <p>The private apartments tour is our highlight, but all of it is winning. It draws its character not from the displays themselves, but the sheer diversity of what’s there, and the strangely homely feel. This is place which you really do have to visit.</p>\n\n                <h3>Wildlife at St James’s Park</h3>\n                <p>The Royal Parks are all worth a visit, but St James’s tops them for its wildlife: pop in to watch the pelicans being fed, or wander around the lake to see the mallards splashing about. The park also hosts the annual Trooping the Colour, and contains the Mall and Horse Guards Parade. Inn The Park is a nice spot for a glass of wine in the afternoon, too, and the park stays open late too, so you can picnic well after sundown. Check out the <a href=\"https://www.royalparks.org.uk/parks/st-jamess-park\" target=\"_blank\">Royal Parks website</a>.</p>\n\n                <h3>Speaker’s corner in Hyde Park</h3>\n                <p>Celebrate eccentricity from around the world at <a href=\"http://www.speakerscorner.net\" target=\"_blank\">Speaker’s Corner</a>, the last corner of the world where truly free speech is aired. Sure, you’ll hear some outrageous rubbish being spouted, but you might just catch something quietly revelatory, too.  Stroll along to Hyde Park and meet some of the most extrovert characters in London.</p>\n\n                <h3>Columbia Road Flower Market</h3>\n                <p>This market is a gorgeous, bustling collection of bright smells and vivid splashes of colour. With the weather right, it’s a beautiful place simply to wander down.</p>\n                <p>It’s open 8am – 3ish, and later on is when the bargains are to be had. There are plenty of coffee shops and boutiques nearby, too. This <a href=\"http://www.columbiaroad.info\" target=\"_blank\">website</a> gives you all the information you’ll need.</p>\n\n                <h3>Climb up Big Ben</h3>\n                <p>Only a case of 334 steps and so few have made it up there. It’s one of London’s hidden treasures. The views from the tower are stunning, while the insides of the clock faces are fascinating in their own way. Tours are 9.00am, 11.00am and 2.00pm Monday to Friday and are free, but must be sponsored by an MP. It’s well worth the effort to <a href=\"http://www.parliament.uk/visiting/visiting-and-tours/tours-of-parliament/bigben/\" target=\"_blank\">register</a>.</p>\n\n                <h3>Highgate Cemetary</h3>\n                <p>Many famous figures are buried at <a href=\"http://highgatecemetery.org\" target=\"_blank\">Highgate Cemetary</a>, including Karl Marx and Douglas Adams. There is many beautiful memorials throughout as well, including a mausoleum the Beer family with a centrepiece showing their young daughter being carried to heaven, which is eye-catching and sentimental.</p>\n\n                <h3>London’s free museums</h3>\n                <p>The UK’s capital is home to a number of world-class museums and galleries. And the best thing? The finest are totally free. Strolling among the dinosaur skeletons of the <a href=\"http://www.nhm.ac.uk\" target=\"_blank\">National History Museum</a> won’t cost you a penny, nor will getting up close and personal with the works of da Vinci and Monet at the <a href=\"https://www.nationalgallery.org.uk\" target=\"_blank\">National Gallery</a>. Marveling at the ancient treasures at the <a href=\"http://www.britishmuseum.org\" target=\"_blank\">British Museum</a>, the modern art at the <a href=\"http://www.tate.org.uk/visit/tate-modern\" target=\"_blank\">Tate Modern</a> or the classics at <a href=\"http://www.tate.org.uk/visit/tate-britain\" target=\"_blank\">Tate Britain</a> is also free.</p>\n\n                <h3>London Transport Museum</h3>\n                <p>The surprisingly un-dreary <a href=\"http://www.ltmuseum.co.uk\" target=\"_blank\">London Transport Museum</a> is a treasure trove for design-lovers, with exhibitions focusing on iconic London transportation, including the Tube, black cabs and double-decker buses. Probably my most expensive recommendation, but a visit is recommended nonetheless.</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>The Photographers' Gallery</h3>\n                <p>The <a href=\"http://thephotographersgallery.org.uk\" target=\"_blank\">Photographers' Gallery</a> sadly is often overlooked. It’s one of my favourite pastimes and is the largest public gallery in the capital dedicated to photography. As well as work from up-and-coming artists, they’ve a historical collection that shows off some stunning work, and work that shows how photography has evolved over the past century. Entry is only free before midday, £3 thereafter.</p>\n\n                <h3>St Paul’s Cathedral</h3>\n                <p>St Paul’s is a magnificent building, hardy and resilient, that has stayed open against all the odds  but it isn’t merely a highlight of the city’s skyline. Inside, it’s stunning, and not only for its architecture, but as a working Cathedral. Check out the <a href=\"https://www.stpauls.co.uk\" target=\"_blank\">website</a> for what’s happening.</p>\n                <p>Evensong, from 5 – 5.45, never fails to move. The choir is kept to an exceptional standard. It’s free to attend, but be respectful, as it’s a place of worship. Donations are welcomed.</p>\n\n                <h3>The Ceremony of the Keys</h3>\n                <p>You’ll need to book up for this, but this a must see for the tourists. The Tower is home to the Crown Jewels and all number of priceless jewels, so locking it up isn’t just for show. It’s an odd thing to think you’re witnessing just what someone did hundreds of years ago – this is a very real link to the past. <a href=\"http://www.hrp.org.uk/tower-of-london/whats-on/ceremony-of-the-keys/#gs.IhboyQY\" target=\"_blank\">Book up</a> as much in advance as possible.</p>\n\n                <h3>The best walk in London</h3>\n                <p>This is my favourite place in London. The <a href=\"https://www.southbankcentre.co.uk\" target=\"_blank\">South bank</a> is the perfect place to simply stroll along. Come and appreciate just how magnificent London really can be: you can take the likes of St Paul’s, The London Eye, Tower Bridge, the Oxo Tower, The Royal Festival Hall, the Tate Modern and plenty more. Just look up: what a place to live.</p>\n\n                <h3>RAF museum</h3>\n                <p>Enjoy the fascinating story of the RAF’s history. It’s as much about the people as the planes too, and there are some fascinating tales being told. Highlights include the 3D Cinema, and the stirring light show Our Finest Hour, which honours the Battle of Britain. It’s free and and recommended. Check out the <a href=\"http://www.rafmuseum.org.uk\" target=\"_blank\">website</a>.</p>\n\n                <h3>Get a free view over London</h3>\n                <p>Go up the Walkie Talkie building, at 20 Fenchurch Street in the City (London’s financial district), for views over the capital city, instead of The Shard or London Eye. Entry to the <a href=\"https://skygarden.london\" target=\"_blank\">Sky Garden</a> is completely free, although you do need to book.</p>\n\n                <h3>The London Pass</h3>\n                <p>The <a href=\"https://www.londonpass.com/how-it-works/save-with-london-pass.html\" target=\"_blank\">London Pass</a> gets you in free (often with fast-track entry) to more than 60 top London attractions including the Tower of London, Westminster Abbey, London Bridge Experience and the Thames River Cruise.</p>\n\n                <h3>Peek inside Buckingham Palace </h3>\n                <p>Not many people realise that you can actually tour Buckingham Palace in the summer months. Tickets can (and should) be purchased <a href=\"https://www.royalcollection.org.uk/visit/the-state-rooms-buckingham-palace\" target=\"_blank\">online</a> before you travel and its well-worth a visit if you’re planning on marrying into royalty or just fancy a good nose around the the Queen's home.</p>\n\n                <h3>Learn to knit</h3>\n                <p>Not my cup of tea but knitting your own jumper can be pretty addictive, I'm told.  <a href=\"http://imakeknots.com\" target=\"_blank\">I Make Knots</a> run workshops all over town in knitting and classes are run in collaboration with luxury NYC knitwear designer Manoush.</p>\n\n            </div> <!-- End of col 3 md -->\n            </div>\n        </div> \n   "

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ind_sections\" id=\"events\">\n        <div class=\"row\">\n            <div class=\"col-md-12 section_image \"><img class=\"img-responsive icon_section\" src=\"./../../assets/images/events.svg\"></div>\n            </div>\n        <div class=\"row\">\n            <div class=\"section_heading col-md-12\"><h2>Events</h2></div>\n            </div>\n                        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h3>Proceedings at the Old Bailey</h3>\n                <p>A trip to the <a href=\"https://old-bailey.com\" target=\"_blank\">Old Bailey</a> offers a fascinating glimpse into the world of criminal law. The public galleries are open to anyone, and heading down, you’ll soon find yourself bizarrely intrigued. Just remember, you can’t take in bags, cameras or mobile phones and there’s no cloakroom. Open Monday to Friday, 10am-1pm and 2pm-5pm.</p>\n\n                <h3>Be part of a TV show</h3>\n                <p>Television shows need audiences for all that whooping and clapping and laughing – and what better way to keep everyone in a good mood than to keep things free?</p>\n                <p>The <a href=\"http://www.bbc.co.uk/showsandtours/shows/\" target=\"_blank\">BBC website</a> is the place to go and you can witness the top shows at no cost, provided like you’ll make like a seal and clap on demand.</p>\n\n                <h3>The offbeat guide to London</h3>\n                <p>I stumbled upon this site for future events in London. Full of really useful information, great deals and the site is constantly updated.</p>\n                <p>Bookmark the <a href=\"https://todolist.org.uk\" target=\"_target\">website</a> and you’ll never miss the key events in London</p>\n\n                <h3>Southbank Centre</h3>\n                <p>If you are looking for things to do, <a href=\"https://www.southbankcentre.co.uk/whats-on\" target=\"_blank\">Southbank Centre</a> has a great mix of events covering classical music, gigs, art, literature, performance and dance plus a year-round programme of unique festivals. </p>\n\n                <h3>Laugh at the Pleasance Theatre</h3>\n                <p>One of London's hidden gems. It’s a tiny, tiny <a href=\"https://www.pleasance.co.uk/via/search/london\" target=\"_blank\">theatre</a> close to Caledonian Road station, and it’s especially good for Edinburgh Fringe previews. It draws the occasional big name – although you have to get in quick – but you can usually go and see some undiscovered talent for under a tenner. </p>\n\n                <h3>Stimulate your mind</h3>\n                <p>The <a href=\"http://www.citylit.ac.uk\" target=\"_blank\">City Literary Institute</a> offers a wide-range of evening classes and short courses – over 5,000 of them. There are lectures from £9.00, academic walking tours from £19.00 and a variety of other classes, which vary from the standard literacy and numeracy stuff to the weird and wonderful. Many clases I visited have contined in the pub and you meet some wonderfully eccentric people.</p>\n\n                <h3>Bowl at All Star Lanes</h3>\n                <p>All Star Lanes gives you the opportunity to excel at ten-pin bowling, as well as enjoy great drinks and food. A perfect night out with colleagues after a long day in the office. Check our their excellent <a href=\"https://www.allstarlanes.co.uk\" target=\"_blank\">website</a></p>\n\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>A free gig at the Social</h3>\n                <p>Over more than 15 years, the Social has built up a reputation as one of London’s finest venues for a good time. It’s always free entry upstairs if an act is playing downstairs, and sometimes hosts free entry downstairs for gigs too – just check the <a href=\"http://www.thesocial.com\" target=\"_blank\">website</a> for details. Music here veers towards funk, hip hop and house, but they’ve plenty of new bands, too. If you can stretch to a fiver, go for hip hop karaoke on a Thursday.</p>\n\n                <h3>Watch a classic film for free</h3>\n                <p>Head down to watch a film or television programme from the <a href=\"http://www.bfi.org.uk/archive-collections/introduction-bfi-collections/bfi-mediatheques\" target=\"_target\">BFI’s</a> substantial archive, without paying a penny. They’ve more than 2,500 highlights to enjoy, which include old British TV favourites and iconic films, as well as rare home footage which give a fascinatingly intimate insight into the past.</p>\n\n                <h3>The best nightlife in London</h3>\n                <p>My clubbing days are sadly well past me, but this site will ensure you can dance happily away into the night without breaking your budget.</p>\n                <p>This definitive list will ensure you can enjoy a good night on the razzle for next to nothing. Be sure to bookmark the <a href=\"https://www.designmynight.com/london/clubs/cheap-clubs-in-london\" target=\"_blank\">website</a>.</p>\n\n                <h3>Watch a film outdoors…</h3>\n                <p>Obviously a seasonal option, but in the summertime you can barely move in London for outdoor screens. There’s the <a href=\"http://rooftopfilmclub.com/london\" target=\"_blank\">Rooftop Cinema</a> that pops up in Shoreditch, Stratford and Peckham; <a href=\"https://www.backyardcinema.co.uk\" target=\"_blank\">Backyard Cinema</a> in Camden and the <a href=\"http://www.thelunacinema.com\" target=\"_blank\">Luna Cinema</a> that projects its classic movies wherever it can. There’s also a little one under the Westway at <a href=\"http://www.portobellopopup.com/about/\" target=\"_blank\">Portobello Road</a>.</p>\n\n                <h3>An early morning rave</h3>\n                <p>If you're a morning person, this is for you. Get the workday off to a jolly start by raving it up in East London with a pre-work bop with Morning Gloryville, a new global concept now found in eleven countries across the world. Treat yourself to superfood smoothies and early morning massages. Visit the <a href=\"http://morninggloryville.com\" target=\"_blank\">website</a> for all the information you need. </p>\n\n                <h3>Listen to live jazz at Nightjar</h3>\n                <p>This is a wonderful night to enjoy. A really sophisticated <a href=\"https://www.barnightjar.com\" target=\"_blank\">venue</a> – cool, intimate and table service only, with live jazz most evenings. Okay, I concede this is a very experience night out, but it's a fantastic experience. As a first date, you can't beat it.</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>Cultural events at the Scoop</h3>\n                <p>The Scoop host events all year around, all of which are free and open to everyone. They’ve theatre, music, film, and screen sport during the summer. In fact, if you’re ever short of something to do on a summer’s evening, or on a weekend, <a href=\"http://www.visitlondon.com/things-to-do/place/3720745-scoop#W3VCGhS2S5EM5UCw.97\" target=\"_target\">look them up</a>: you’ll likely find something to do.</p>\n\n                <h3>Learn from attending a lecture</h3>\n                <p>Attend a free public lecture at one of the country’s top universities, LSE. They tackle some big subjects, like the refugee crisis, terrorism and gender equality, and attract big names too: Jeremy Corbyn is often a guest speaker. Check out the coming <a href=\"http://www.lse.ac.uk/Events\" target=\"_blank\">events</a>.</p>\n\n                <h3>Theatre tickets</h3>\n                <p>Explore London’s West End through the magic of theatre. Catch a show at one of the capital’s famous theatres with tickets to an array of award-winning plays and spectacular musicals. Plus find no booking fee offers for some of the top shows around at <a href=\"http://www.lastminute.com/theatre/\" target=\"_target\">lastminute.com</a> or checkout this great <a href=\"http://www.getintolondontheatre.co.uk\" target=\"_target\">website</a>.</p>\n\n                <h3>Play board games</h3>\n                <p>If you still play board games on xmas day, you may like a relaxed night of cocktails and Cluedo try <a href=\"http://www.draughtslondon.com\" target=\"_blank\">Draughts</a>. Try out London’s first and only board game cafe (£5 cover charge). If Haggerston is a bit off the beaten track, you can check out <a href=\"http://www.londononboard.com\" target=\"_blank\">London on Board</a> to find your nearest board game meet-up instead.</p>\n\n                <h3>A tour guide with a twist</h3>\n                <p>These tours are excellent. All the guides working for <a href=\"http://sockmobevents.org.uk\" target=\"_blank\">Unseen Tours</a> are homeless, ex-homeless or vulnerably housed Londoners. Tickets cost just £10 per person and tours cover half a dozen different neighbourhoods and run every day of the week.</p>\n\n                <h3>Debates  at Speaker's Corner</h3>\n                <p>Speakers gather daily at <a href=\"https://www.royalparks.org.uk/parks/hyde-park/things-to-see-and-do/speakers-corner\" target=\"_blank\">Speaker's Corner</a> to speak on a range of different subject – mostly politically – and there are always people stopping by on their walk through the park to hear the opinion or the orator. Over the years many great people have spoken at the site near Hyde Park Corner, and there have been many great and interesting people in the crowd too, with Karl Marx and Vladimir Lenin amongst the most notable. Sunday morning is the busiest period.</p>\n</div>\n            </div> <!-- End of col 3 md -->\n        </div> <!-- End of row -->"

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "    <div class=\"container ind_sections\" id=\"food\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12 section_image \"><img class=\"img-responsive icon_section\" src=\"./../../assets/images/food.svg\"></div>\n            </div>\n        <div class=\"row\">\n            <div class=\"section_heading col-md-12\"><h2>Food and Drink</h2></div>\n            </div>\n\n            <div class=\"row\">\n            <div class=\"col-md-4 \">\n                <h3>The Taste Card free trial</h3>\n                <p>The Taste Card is a membership scheme giving 50% off or '2 for the price of 1' deals at thousands of restaurants in the UK. It costs £79.95 for a year but they regularly offer a free 30-day trial. Check their <a href=\"https://www.tastecard.co.uk\" target=\"_blank\">website</a> and apply online. UK and Ireland addresses only.</p>\n\n                <h3>Go to Sam Smith pubs</h3>\n                <p>If you’re looking for a pint in London, you could find yourself having little change from a tenner for two pints. Alternatively,  find yourself a Sam Smith pub. It’s a local brewery that serves the beer for a lot less than the big chains.</p>\n                <p>You’ll also have a more interesting experience as many of them are in olde style pubs that have retained their pubby character rather than selling out to the hipsters and bankers. The pubs are all over London and the Taddy lager is usually just over £3 a pint. This <a href=\"http://www.thelondoneconomic.com/food-drink/top-10-sam-smiths-pubs-in-london/07/10/\" target=\"_blank\">website</a> will guide you towards the best Sam Smith pubs in London.</p>\n\n                <h3>Eat in our parks</h3>\n                <p>London offers some stunning parks to enjoy. It’s a simple suggestion, but grabbing some lunch from one of the supermarket chains and enjoying the great outdoors in one of London’s many parks and outdoor spaces is a perfect way to save money. The <a href=\"https://www.royalparks.org.uk/parks\" target=\"_blank\">Royal Parks website</a> gives you all the information you need.</p>\n\n                <h3>Enjoy a traditional fish and chips</h3>\n                <p>This old, British favourite can sometimes be a little tricky to find in central London. Thankfully, <a href=\"http://poppiesfishandchips.co.uk\" target=\"_blank\">Poppies</a> has restaurants in Spitalfields, Soho and Camden. The foods is great quality and offers value for money.</p>\n\n                <h3>Go for £10 steak</h3>\n                <p>There are a few places to go in London now for a cheap steak dinner, most notably <a href=\"http://flatironsteak.co.uk\" target=\"_blank\">Flat Iron</a>, whose three West End locations can attract queues of up to two hours. Fortunately, they work the queue with a mobile app, which can allow you to pop off to a local pub to build up your appetite.</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>Discount meal vouchers</h3>\n                <p>There are plenty of chains in London that do some fantastic deals with vouchers that you can download to your phone, or print out, for free. Check out <a href=\"https://www.pizzaexpress.com\" target=\"_blank\">Pizza Express</a>, <a href=\"http://latasca.com\" target=\"_blank\">La Tasca</a> and <a href=\"https://www.zizzi.co.uk\" target=\"_blank\">Zizzi</a>. It’s worth having a look on voucher websites and those of the individual restaurants ahead of dining; before you order your food, ensure the waiter/waitress is aware you want to use your vouchers.  Many chains and smaller, independent restaurants also do great lunch and early evening deals; again, look online and ask for any offers before you order.</p>\n\n                <h3>Time Out guide to cheap food</h3>\n                <p>The 100 best cheap eats in London as recommended by <a href=\"http://www.timeout.com/london/food-drink/londons-best-cheap-eats\" target=\"_blank\">Time Out</a>   .</p>\n                <p>This is site is fantastic for highlighting the lastest best restaurants and cafés in the capital for great food and good value.</p>\n\n                <h3>Cheap but tasty street food</h3>\n                <p>Street food has really taken off in London too, with food stalls from around the world at London’s markets. There are lots to choose from but some of my favourites are <a href=\"http://boroughmarket.org.uk\" target=\"_blank\">Borough Market</a> (Mon–Sat), <a href=\"https://www.rbkc.gov.uk/subsites/visitkensingtonandchelsea/shopping/portobello/ourmarkets/portobelloroadmarket.aspx\" target=\"_blank\">Portobello Road Market</a> (Mon-Sat) and the <a href=\"http://www.realfoodfestival.co.uk/real-food-markets/\" target=\"_blank\">Real Food Markets</a> at Charing Cross (Wed–Fri) or Kings Cross (Tue–Fri). Even if you’re not buying, you can usually grab a few tasting samples as you walk around.</p>\n\n                <h3>Attend a Gin Social</h3>\n                <p>Once a month Soho’s <a href=\"http://www.graphicbar.com/gin-social\" target=\"_blank\">Graphic Bar</a> throws open its doors to gin-lovers and producers alike, hosting a bargain evening in which a lowly fiver will get you a G&T, a tasting of the gin of the month and a specially created gin cocktail. The event is held on the first Monday of every month, and tickets can be purchased in <a href=\"https://www.eventbrite.co.uk/o/graphic-bar-soho-8476772936\" target=\"_blank\">advance</a>.</p>\n\n                <h3>Eat into the night</h3>\n                <p><a href=\"http://streetfeast.com\" target=\"_blank\">Street Feast London</a>, a night-time food market with an ever-turning carousel of nomadic eateries. There are bars too, so you can make a night of it. It’s free to enter before 7pm (£3 thereafter).</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>Look out for soft launches</h3>\n                <p>A soft launch is a chance for new restaurants to test their menu, kitchen and staff before opening the doors to the public. Luckily, they want real people to experiment on and often offer 50% off the price of a meal. Keep an eye out on the <a href=\"http://www.hot-dinners.com\" target=\"_blank\">hot dinners website</a>.</p>\n\n                <h3>Cocktails in Kentish Town</h3>\n                <p>A lovely cocktail bar (with good retro music) housed in a former underground toilet in Kentish Town. Launched in January 2015, cocktail bar <a href=\"http://www.ladiesandgents.co\" target=\"_blank\">Ladies and Gentlemen</a> has already established itself THE new bar to watch. The cocktails are generally priced at a competitive £8-£9.</p>\n\n                <h3>Take Advantage of Happy Hour</h3>\n                <p>If you’re in London with friends and looking to have a few fun nights out without breaking the bank, you’re in luck! Numerous pubs and clubs across London have student nights and happy hours where you’ll find two-for-one deals and other great promotions</p>\n\n                <h3>Pret gives out free coffee!</h3>\n                <p>Yup, that’s right. At the discretion of the barista inside Pret, you might be one of the lucky chosen people to receive your coffee for free! This won't happen to you every day but it serves as a reason to return.</p>\n\n                <h3>Tour a brewery</h3>\n                <p>A must for beer fans (and quite interesting for non-beer drinkers, like me), a trip to the <a href=\"http://www.camdentownbrewery.com/about/brewery-tours/\" target=\"_blank\">Camden Town Brewery</a> not only includes a tour of the facilities but many, many cans of beer fresh off the production line. Tours last 90-120 minutes and run on Thursdays and Saturdays.</p>\n\n            </div> <!-- End of col 3 md -->\n        </div> <!-- End of row -->\n    </div> <!-- End of container -->"

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = " <div class=\"container\" id=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-md-4 footer_text\">\n          <h3>Sean Hegarty</h3>\n          <p>Front-end web developer / digital artworker</p>\n          <p>07855 456521</p>\n          <p><a href=\"http://www.hegartycreative.com\">www.hegartycreative.com</a></p>\n          <p><a href=\"http://www.hegartyanimations.com\">www.hegartyanimations.com</a></p>\n          <p><a href=\"http://www.happygooner.com\">www.happygooner.com</a> (blog)</p>\n        </div> <!-- End of col 2 -->\n        <div class=\"col-md-6 bio\">\n          <p>Hello, I’m a front-end web developer and digital artworker, a keen cyclist, someone who loves to explore London and the wider world. I feel very lucky to have witnessed how London has grown and developed. Yes, the city can be expensive, impersonal, dirty and exhausting, but it never fails to excite, thrill and captivate. My blog will describe the ups (and the occasional downs) of living in London.</p>\n        </div> <!-- End of col 2 -->\n        <div class=\"col-md-2\">\n          <div class=\"social_icons\">\n<ul class=\"rrssb-buttons tester clearfix\">\n  <li class=\"rrssb-email\">\n    <!-- Replace subject with your message using URL Endocding: http://meyerweb.com/eric/tools/dencoder/ -->\n    <a href=\"mailto:info@hegartycreative.com?Subject=Hello%20Sean\">\n      <span class=\"rrssb-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28 28\"><path d=\"M20.11 26.147c-2.335 1.05-4.36 1.4-7.124 1.4C6.524 27.548.84 22.916.84 15.284.84 7.343 6.602.45 15.4.45c6.854 0 11.8 4.7 11.8 11.252 0 5.684-3.193 9.265-7.398 9.3-1.83 0-3.153-.934-3.347-2.997h-.077c-1.208 1.986-2.96 2.997-5.023 2.997-2.532 0-4.36-1.868-4.36-5.062 0-4.75 3.503-9.07 9.11-9.07 1.713 0 3.7.4 4.6.972l-1.17 7.203c-.387 2.298-.115 3.3 1 3.4 1.674 0 3.774-2.102 3.774-6.58 0-5.06-3.27-8.994-9.304-8.994C9.05 2.87 3.83 7.545 3.83 14.97c0 6.5 4.2 10.2 10 10.202 1.987 0 4.09-.43 5.647-1.245l.634 2.22zM16.647 10.1c-.31-.078-.7-.155-1.207-.155-2.572 0-4.596 2.53-4.596 5.53 0 1.5.7 2.4 1.9 2.4 1.44 0 2.96-1.83 3.31-4.088l.592-3.72z\"/></svg></span>\n      <span class=\"rrssb-text\">email</span>\n    </a>\n  </li>\n        <li class=\"rrssb-linkedin\">\n        <!-- Replace href with your meta and URL information -->\n        <a href=\"https://www.linkedin.com/in/sean-hegarty-7292b778?trk=hp-identity-name\" target=\"_blank\" class=\"popup\">\n          <span class=\"rrssb-icon\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28 28\"><path d=\"M25.424 15.887v8.447h-4.896v-7.882c0-1.98-.71-3.33-2.48-3.33-1.354 0-2.158.91-2.514 1.802-.13.315-.162.753-.162 1.194v8.216h-4.9s.067-13.35 0-14.73h4.9v2.087c-.01.017-.023.033-.033.05h.032v-.05c.65-1.002 1.812-2.435 4.414-2.435 3.222 0 5.638 2.106 5.638 6.632zM5.348 2.5c-1.676 0-2.772 1.093-2.772 2.54 0 1.42 1.066 2.538 2.717 2.546h.032c1.71 0 2.77-1.132 2.77-2.546C8.056 3.593 7.02 2.5 5.344 2.5h.005zm-2.48 21.834h4.896V9.604H2.867v14.73z\"/></svg>\n          </span>\n          <span class=\"rrssb-text\">linkedin</span>\n        </a>\n      </li>\n\n      <li class=\"rrssb-github\">\n        <a href=\"https://github.com/HegartyCreative\" target=\"_blank\">\n          <span class=\"rrssb-icon\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28 28\"><path d=\"M13.97 1.57c-7.03 0-12.733 5.703-12.733 12.74 0 5.622 3.636 10.393 8.717 12.084.637.13.87-.277.87-.615 0-.302-.013-1.103-.02-2.165-3.54.77-4.29-1.707-4.29-1.707-.578-1.473-1.413-1.863-1.413-1.863-1.154-.79.09-.775.09-.775 1.276.104 1.96 1.316 1.96 1.312 1.135 1.936 2.99 1.393 3.712 1.06.116-.823.445-1.384.81-1.704-2.83-.32-5.802-1.414-5.802-6.293 0-1.39.496-2.527 1.312-3.418-.132-.322-.57-1.617.123-3.37 0 0 1.07-.343 3.508 1.305A12.22 12.22 0 0 1 14 7.732c1.082 0 2.167.156 3.198.44 2.43-1.65 3.498-1.307 3.498-1.307.695 1.754.258 3.043.13 3.37a4.968 4.968 0 0 1 1.314 3.43c0 4.893-2.978 5.97-5.814 6.286.458.388.876 1.16.876 2.358 0 1.703-.016 3.076-.016 3.482 0 .334.232.748.877.61 5.056-1.687 8.7-6.456 8.7-12.08-.055-7.058-5.75-12.757-12.792-12.75z\"/></svg>\n          </span>\n          <span class=\"rrssb-text\">github</span>\n        </a>\n      </li>\n\n      <li class=\"rrssb-twitter\">\n        <!-- Replace href with your Meta and URL information  -->\n        <a href=\"https://twitter.com/happycoder1969\" target=\"_blank\"\n        class=\"popup\">\n          <span class=\"rrssb-icon\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28 28\"><path  d=\"M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z\"/></svg>\n          </span>\n          <span class=\"rrssb-text\">twitter</span>\n        </a>\n      </li>\n  </ul>\n</div> <!-- End of social icons -->\n        </div> <!-- End of col 2 -->\n      </div> <!-- End of row div -->\n    </div> <!-- End of container div -->"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"quote\">\n<div id=\"carousel\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#carousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carousel\" data-slide-to=\"2\"></li>\n        <li data-target=\"#carousel\" data-slide-to=\"3\"></li>\n        <li data-target=\"#carousel\" data-slide-to=\"4\"></li>\n        <li data-target=\"#carousel\" data-slide-to=\"5\"></li>\n        <li data-target=\"#carousel\" data-slide-to=\"6\"></li>\n        <li data-target=\"#carousel\" data-slide-to=\"7\"></li>\n    </ol>\n    <!-- Carousel items -->\n    <div class=\"carousel-inner carousel-zoom\">\n        <div class=\"active item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote1.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>Nothing is certain in London but expense</h3>\n          <p><em> William Shenstone (1743)</em></p>\n          </div>\n        </div>\n        <div class=\"item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote2.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>I’ve been walking about London for the last thirty years, and I find something fresh in it every day</h3>\n          <p><em>Walter Besant (1901)</em></p>\n          </div>\n        </div>\n        <div class=\"item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote3.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>By seeing London, I have seen as much of life as the world can show</h3>\n          <p><em>Samuel Johnson (1791)</em></p>\n          </div>\n        </div>\n        <div class=\"item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote4.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>The streets of London have their map, but our passions are unchartered. What are you going to meet if your turn this corner?</h3>\n          <p><em>Virginia Wolf (1922)</em></p>\n          </div>\n        </div>\n        <div class=\"item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote5.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>Sir, when a man is tired of London, he is tired of life; for there is in London all that life can afford</h3>\n          <p><em>Samuel Johnson (1791)</em></p>\n          </div>\n        </div>\n       <div class=\"item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote6.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>The man who can dominate a London dinner-table can dominate the world</h3>\n          <p><em>Oscar Wilde (1893)</em></p>\n          </div>\n        </div>\n       <div class=\"item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote7.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>I don’t know what London’s coming to — the higher the buildings the lower the morals</h3>\n          <p><em>Noel Coward (1931)</em></p>\n          </div>\n        </div>\n       <div class=\"item\"><img class=\"img-responsive\" src=\"./../../assets/images/quote8.jpg\">\n          <div class=\"carousel-caption\">\n          <h3>London is a splendid place to live in for those who can get out of it</h3>\n          <p><em>Lord Balfour of Burleigh (1944)</em></p>\n          </div>\n        </div>\n       </div>\n    <!-- Carousel nav -->\n    <a class=\"carousel-control left\" href=\"#carousel\" data-slide=\"prev\">‹</a>\n    <a class=\"carousel-control right\" href=\"#carousel\" data-slide=\"next\">›</a>\n</div>\n</div>"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div class=\"container intro\">\n    <div class=\"row\">\n        <p><span>London too expensive? Don't you believe it.</span><br>I've lived in London all my life and created this site to demonstrate how you can enjoy London without breaking the bank. I hope my guide helps you enjoy all what the capital has to offer. </p>\n        <p>London can be a very expensive city. Prohibitively so. But with a little planning, you can enjoy an affordable visit. I'd love to hear of your money-saving days out. Drop me an <a href=\"mailto:info@hegartycreative.com?Subject=Hello%20Sean\">email</a>.</p>\n    </div> <!-- End of row class -->\n</div> <!-- End of container div -->\n"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "    <div class=\"container main_links\" id=\"main_links\">\n        <div class=\"row\">\n            <div class=\"col-md-4 section\">\n                <a href=\"#food\"><div class=\"pic\"><img src=\"./../../assets/images/food.jpg\" />\n                    <div class=\"text\"><h2>Food and Drink</h2></div>\n                </div></a>\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 section\">\n                <a href=\"#activities\"><div class=\"pic\"><img src=\"./../../assets/images/activities.jpg\" />\n                    <div class=\"text\"><h2>Activities</h2></div>\n                </div></a>\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 section\">\n                <a href=\"#attractions\"><div class=\"pic\"><img src=\"./../../assets/images/attractions.jpg\" />\n                    <div class=\"text\"><h2>Attractions</h2></div>\n                </div></a>\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 section\">\n                <a href=\"#events\"><div class=\"pic\"><img src=\"./../../assets/images/events.jpg\" />\n                    <div class=\"text\"><h2>Events</h2></div>\n                </div></a>\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 section\">\n                <a href=\"#shopping\"><div class=\"pic\"><img src=\"./../../assets/images/shopping.jpg\" />\n                    <div class=\"text\"><h2>Shopping</h2></div>\n                </div></a>\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 section\">\n                <a href=\"#travel\"><div class=\"pic\"><img src=\"./../../assets/images/travel.jpg\" />\n                    <div class=\"text\"><h2>Travel</h2></div>\n                </div></a>\n            </div> <!-- End of col 3 md -->\n        </div> <!-- End of row -->\n    </div> <!-- End of container -->"

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#quote\">London is Cheap</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"quote\"><a href=\"#footer\">About me</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#food\">Food and Drink</a></li>\n        <li><a href=\"#activities\">Activities</a></li>\n        <li><a href=\"#attractions\">Attractions</a></li>\n        <li><a href=\"#events\">Events</a></li>\n        <li><a href=\"#shopping\">Shopping</a></li>\n        <li><a href=\"#travel\">Travel</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ind_sections\" id=\"shopping\">\n        <div class=\"row\">\n            <div class=\"col-md-12 section_image \"><img class=\"img-responsive icon_section\" src=\"./../../assets/images/shopping.svg\"></div>\n            </div>\n        <div class=\"row\">\n            <div class=\"section_heading col-md-12\"><h2>Shopping</h2></div>\n            </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 \">\n                <h3>Get a free haircut in London</h3>\n                <p>Long of hair and short of money? We know the feeling. Fortunately, there are many cutters in the capital who are happy to give you a free or very cheap styling session from one of their trainees.</p>\n                <p>Check out this <a href=\"http://www.freehaircuts.co.uk\" target=\"_blank\">place</a> in Shoreditch.</p>\n\n                <h3>Browse for books</h3>\n                <p>Southbank Centre’s <a href=\"https://www.southbankcentre.co.uk/content/southbank-centre-book-market\" target=\"_blank\">Book Market</a> is one of London’s best kept secrets. Tucked under the Waterloo Bridge on Queen’s Walk, it’s one of the only outdoor second-hand and antique book markets in southern England. It’s open daily, rain or shine, with a wide selection of paperbacks and hardcover to choose from.</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>Car-boot sales</h3>\n                <p>Whether its a high-end fashion steal or a cut-price antique, everyone loves a car-boot bargain. There are loads of great car-boot sales in London where you'll find much more than just chipped crockery and musty old clothes on offer. TimeOut have put together a comprehensive <a href=\"http://www.timeout.com/london/shopping/londons-best-car-boot-sales\" target=\"_blank\">guide</a> to the very best in London.</p>\n\n                <h3>London clothes markets</h3>\n                <p>London markets are an excellent way to find bargains. The pick of them include <a href=\"http://www.portobelloroad.co.uk\" target=\"_blank\">Portobello</a> market, found in west London, <a href=\"http://brixtonmarket.net\" target=\"_blank\">Brixton</a> market in south London, <a href=\"https://www.coventgarden.london\" target=\"_blank\">Covent Garden</a> market, in the west end and the iconic <a href=\"https://www.camdenmarket.com\" target=\"blank\">Camden</a> Market in north London.</p>\n\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>South Bank Fair</h3>\n                <p>On sunny weekends, The <a href=\"https://www.southbankcentre.co.uk/visit\" target=\"_blank\">South Bank</a> of the Thames comes to life with a variety of stalls selling clothes, books, and jewellery as well as some interesting street performers. Get off at Westminster tube station, cross the bridge near the Big Ben and walk along the Thames toward the ‘London Eye’ big wheel. This is a favourite place for the locals.</p>\n    </div>\n            </div> <!-- End of col 3 md -->\n        </div> <!-- End of row -->\n"

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<div class=\"container ind_sections\" id=\"travel\">\n        <div class=\"row\">\n            <div class=\"col-md-12 section_image \"><img class=\"img-responsive icon_section\" src=\"./../../assets/images/travel.svg\"></div>\n            </div>\n        <div class=\"row\">\n            <div class=\"section_heading col-md-12\"><h2>Travel</h2></div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col-md-4 \">\n\n                <h3>Walking tour</h3>\n                <p>Take the excellent ‘free’ walking tour instead of the bus tour.</p>\n                <p>London has a number of excellent walking tours put on by knowledgeable and engaging locals. Try out <a href=\"http://www.walks.com\" target=\"_blank\">London Walks</a>. The tours are filled with interesting and entertaining commentary from your enthusiastic guide, plus a nice stroll through the heart of London’s most historic neighborhoods.</p>\n\n                <h3>Visitor Oyster Card</h3>\n                <p>You can save money in London is by getting yourself an <a href=\"https://www.visitbritainshop.com/world/london-visitor-oyster-card/?cid=e3aa7d3fa58c4fe4829517a98e7c8c121393&utm_medium=affiliate&utm_source=visitlondon&utm_campaign=affiliate\" target=\"_blank\">Oyster Card</a> travel smartcard for the city’s fantastic public transport system.</p>\n                <p>Using a Visitor Oyster Card is more than 50% cheaper than buying one-day paper Travelcards or single tickets with cash.</p>\n\n                <h3>Black Cabs can be fast(er)...</h3>\n                <p>…if you’re in a hurry as black cabs in London can use bus lanes. And if there are 5 in your group and not travelling long distances, then can are not a great deal more expensive than you all using the tube network. Plus the black cab drivers are fantastic guides to what's really happening in London.</p>\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>London from the Thames</h3>\n                <p>The budget way to see London from the water is on the <a href=\"http://www.thamesclippers.com\" target=\"_blank\">Thames Clipper</a> river boat service. It’s a commuter service but runs along the scenic stretch of river from the London Eye to Greenwich. Adult single fares cost £6.80 and you get 10% off fares if you have an Oyster card or a third off with if you’ve got a Travelcard.</p>\n\n                <h3>Hop-On, Hop-Off Bus Pass</h3>\n                <p>If you’re only in London for a day or two, the <a href=\"https://www.hop-on-hop-off-bus.com/london-bus-tours\" target=\"_blank\">Hop-on, Hop-off</a> bus tours are fantastic for getting around to all the London attractions you want to see without being limited to a set schedule.</p>\n\n                <h3>Walk between tube stops</h3>\n                <p>There are quite a few stations where it’s actually quicker to walk rather than take the tube/bus. Case in point being Leicester Square to Covent Garden, the walk will take less than 3 minutes, which is quicker that going underground on the tube. There's also far more to see than being stuck in the underground!</p>\n\n\n            </div> <!-- End of col 3 md -->\n            <div class=\"col-md-4 \">\n                <h3>Emirates Air Line Cable Car</h3>\n                <p>Using the built-for-commuters cable car gondolas that cross the Thames is a cheap way to see London from on-high. At just about £6.00 using an Oyster card, you can do a 20 minute round-trip flight above London. There are some nice views of the Docklands area and Greenwich.</p>\n                <p>Of course, you don’t have to get straight back on the cable car once you arrive at your destination, so we recommend taking some time out to explore either Greenwich or the Docklands before you go back. Bonus points, it shouldn’t be very busy as most commuters prefer to stay underground. Just perfect for a visitor! Check out the <a href=\"https://tfl.gov.uk/modes/emirates-air-line/\" target=\"_blank\">website</a>.</p>\n\n            </div> <!-- End of col 3 md -->\n              </div>\n        </div> <!-- End of row -->\n\n"

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[652]);
//# sourceMappingURL=main.bundle.map