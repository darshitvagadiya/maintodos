(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-component/home-component.component */ "./src/app/home-component/home-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: ':status', component: _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponentComponent"] },
    { path: '**', redirectTo: '/all' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-input/todo-input.component */ "./src/app/todo-input/todo-input.component.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");
/* harmony import */ var _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-footer/todo-footer.component */ "./src/app/todo-footer/todo-footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-component/home-component.component */ "./src/app/home-component/home-component.component.ts");
/* harmony import */ var _orderby_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orderby.pipe */ "./src/app/orderby.pipe.ts");
/* harmony import */ var _time_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time.pipe */ "./src/app/time.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_6__["TodoInputComponent"],
                _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_9__["TodoItemComponent"],
                _todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_10__["TodoFooterComponent"],
                _home_component_home_component_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponentComponent"],
                _orderby_pipe__WEBPACK_IMPORTED_MODULE_13__["OrderbyPipe"],
                _time_pipe__WEBPACK_IMPORTED_MODULE_14__["TimePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [
                _todo_service__WEBPACK_IMPORTED_MODULE_7__["TodoService"],
                _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-component/home-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/home-component/home-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-wrapper{\r\n\tmargin: 20px auto;\r\n\twidth: 600px;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n\t.container{\r\n\t\tmax-width: 400px;\r\n\t} \r\n\tapp-todo-item{\r\n\t\tmax-width: 400px;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/home-component/home-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/home-component/home-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"todo-wrapper\">\r\n    <app-todo-input></app-todo-input>\r\n    <div *ngFor=\"let todo of allTodos | orderby\">\r\n    \t<app-todo-item [todo]=\"todo\"></app-todo-item>\r\n    </div>\r\n    <app-todo-footer [allTodos]=\"allTodos\"></app-todo-footer>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home-component/home-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home-component/home-component.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentComponent", function() { return HomeComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponentComponent = /** @class */ (function () {
    function HomeComponentComponent(todoService, route, storageService) {
        this.todoService = todoService;
        this.route = route;
        this.storageService = storageService;
        this.allTodos = [];
    }
    HomeComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.path = params.status;
            _this.todoService.getTodos(_this.path)
                .subscribe(function (todos) { return _this.allTodos = todos; });
        });
    };
    HomeComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-component',
            template: __webpack_require__(/*! ./home-component.component.html */ "./src/app/home-component/home-component.component.html"),
            styles: [__webpack_require__(/*! ./home-component.component.css */ "./src/app/home-component/home-component.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], HomeComponentComponent);
    return HomeComponentComponent;
}());



/***/ }),

/***/ "./src/app/orderby.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/orderby.pipe.ts ***!
  \*********************************/
/*! exports provided: OrderbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbyPipe", function() { return OrderbyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbyPipe = /** @class */ (function () {
    function OrderbyPipe() {
    }
    OrderbyPipe.prototype.transform = function (array) {
        return array.sort(function (a, b) {
            return new Date(a.edited_at || a.created_at).getTime() - new Date(b.edited_at || b.created_at).getTime();
        }).reverse();
    };
    OrderbyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderby'
        })
    ], OrderbyPipe);
    return OrderbyPipe;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setTodos = function (todos) {
        localStorage.setItem('todos', JSON.stringify({ todos: todos }));
    };
    StorageService.prototype.getTodos = function () {
        var localStorageItem = JSON.parse(localStorage.getItem('todos'));
        if (localStorageItem == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(localStorageItem.todos);
        }
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/time.pipe.ts":
/*!******************************!*\
  !*** ./src/app/time.pipe.ts ***!
  \******************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (dateTimeValue, createTime) {
        var remainingTime;
        var seconds = (new Date().getTime() - new Date(dateTimeValue).getTime()) / 1000;
        if (seconds < 10) {
            remainingTime = 'Now';
            // console.log(seconds);
        }
        else if (seconds < 60) {
            remainingTime = Math.floor(seconds) + ' seconds ago';
            // console.log(seconds);
        }
        else if (seconds < 3600) {
            remainingTime = Math.floor(seconds / 60) + ' minutes ago';
        }
        else if (seconds < 86400) {
            remainingTime = Math.floor(seconds / 3600) + ' hour ago';
        }
        else if (seconds > 86400) {
            remainingTime = Math.floor(seconds / 86400) + ' day ago';
        }
        return remainingTime;
    };
    TimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/todo-footer/todo-footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/todo-footer/todo-footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n\tcolor: #777;\r\n\tpadding: 10px 15px;\r\n\theight: 20px;\r\n\ttext-align: center;\r\n\tborder-top: 1px solid #e6e6e6;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.filters{\r\n\tdisplay: flex;\r\n\tlist-style-type: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.filters li {\r\n\tmargin: 0 2px;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.filters li a{\r\n\tcolor: inherit;\r\n\tcursor: pointer;\r\n}\r\n\r\n.filters li a:hover {\r\n\tborder-color: rgba(175, 47, 47, 0.1);\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.filters li a.selected {\r\n\tborder-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.clear-completed,\r\nhtml .clear-completed:active {\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\tfont-size: inherit;\r\n\tcolor: inherit;\r\n\tcursor: pointer;\r\n}\r\n\r\n.clear-completed:hover {\r\n\ttext-decoration: underline;\r\n}"

/***/ }),

/***/ "./src/app/todo-footer/todo-footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/todo-footer/todo-footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n\t<span class=\"todo-count\"><strong>{{getLength()}}</strong> item left</span>\r\n\t<ul class=\"filters\">\r\n\t\t<li>\r\n\t\t\t<a [routerLink]=\"['/all']\">All</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a [routerLink]=\"['/active']\">Active</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a [routerLink]=\"['/completed']\">Completed</a> \r\n\t\t</li>\r\n\t</ul>\r\n\t<button class=\"clear-completed\" (click)=\"clearCompleted()\">Clear completed</button> \r\n</footer>"

/***/ }),

/***/ "./src/app/todo-footer/todo-footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/todo-footer/todo-footer.component.ts ***!
  \******************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoFooterComponent = /** @class */ (function () {
    function TodoFooterComponent(todoService, route) {
        this.todoService = todoService;
        this.route = route;
    }
    TodoFooterComponent.prototype.getLength = function () {
        return this.allTodos.filter(function (todo) { return !todo.completed; }).length;
    };
    TodoFooterComponent.prototype.clearCompleted = function () {
        this.todoService.deleteCompleted();
    };
    TodoFooterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoFooterComponent.prototype, "allTodos", void 0);
    TodoFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-footer',
            template: __webpack_require__(/*! ./todo-footer.component.html */ "./src/app/todo-footer/todo-footer.component.html"),
            styles: [__webpack_require__(/*! ./todo-footer.component.css */ "./src/app/todo-footer/todo-footer.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TodoFooterComponent);
    return TodoFooterComponent;
}());



/***/ }),

/***/ "./src/app/todo-input/todo-input.component.css":
/*!*****************************************************!*\
  !*** ./src/app/todo-input/todo-input.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-input-wrapper{\r\n\tpadding: 25px; \r\n}\r\n\r\n#todo-input{\r\n\tmin-height: 35px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tfont-size: 25px;\r\n\topacity: 0.8;\r\n}\r\n\r\ninput::-webkit-input-placeholder{\r\n\topacity: 0.3;\r\n}\r\n\r\ninput::-ms-input-placeholder{\r\n\topacity: 0.3;\r\n}\r\n\r\ninput::placeholder{\r\n\topacity: 0.3;\r\n}\r\n\r\n.description{\r\n\tresize: none;\r\n}\r\n\r\n.btn{\r\n\tborder: none;\r\n\tpadding: 10px;\r\n\tcolor: #fff;\r\n\tborder-radius: 5px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.btn-submit{\r\n\tbackground-color: red;\r\n}\r\n\r\ntextarea::-webkit-input-placeholder{\r\n\topacity: 0.3;\r\n\tfont-size: 25px;\r\n}\r\n\r\ntextarea::-ms-input-placeholder{\r\n\topacity: 0.3;\r\n\tfont-size: 25px;\r\n}\r\n\r\ntextarea::placeholder{\r\n\topacity: 0.3;\r\n\tfont-size: 25px;\r\n}\r\n\r\n.textarea{\r\n\tborder: none;\r\n\toutline: none;\r\n\tresize: none;\r\n\tfont-size: 25px;\r\n}\r\n\r\n#todo-input:focus{\r\n\tfont-size: 25px;\r\n}\r\n\r\n.todo-input{\r\n\tmin-height: 35px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tfont-size: 25px;\r\n\topacity: 0.8;\r\n\twidth: 100%;\r\n}"

/***/ }),

/***/ "./src/app/todo-input/todo-input.component.html":
/*!******************************************************!*\
  !*** ./src/app/todo-input/todo-input.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"todo-input-wrapper\">\r\n\t<form  (ngSubmit)=\"addTodo()\">\r\n\t\t<input id=\"todo-input\" name=\"todo-input\" type=\"text\" [(ngModel)]=\"todoText\" value=\"{{todoText}}\" placeholder=\"Title\">\r\n\t\t<br>\r\n\t\t<br>\r\n\t\t<!-- <input type=\"text\" name=\"todo-desc\" class=\"todo-input\" [(ngModel)]=\"todoDesc\" value=\"{{todoDesc}}\" placeholder=\"Enter Description\" max=\"100\"> -->\r\n\t\t<textarea placeholder=\"Enter Description\" name=\"todo-desc\" class=\"todo-input description\" [(ngModel)]=\"todoDesc\" maxlength=\"100\"></textarea>\r\n\t\t<button class=\"btn btn-submit\" type=\"button\" (click)=\"addTodo()\" [disabled]=\"!todoText || !todoDesc\">Add Todo</button>\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "./src/app/todo-input/todo-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/todo-input/todo-input.component.ts ***!
  \****************************************************/
/*! exports provided: TodoInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function() { return TodoInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoInputComponent = /** @class */ (function () {
    function TodoInputComponent(todoService) {
        this.todoService = todoService;
    }
    TodoInputComponent.prototype.ngOnInit = function () {
    };
    TodoInputComponent.prototype.addTodo = function () {
        this.todoService.addTodo(this.todoText, this.todoDesc);
        this.todoText = '';
        this.todoDesc = '';
    };
    TodoInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-input',
            template: __webpack_require__(/*! ./todo-input.component.html */ "./src/app/todo-input/todo-input.component.html"),
            styles: [__webpack_require__(/*! ./todo-input.component.css */ "./src/app/todo-input/todo-input.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodoInputComponent);
    return TodoInputComponent;
}());



/***/ }),

/***/ "./src/app/todo-item/todo-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todoWrapper{\r\n\tpadding: 15px 25px;\r\n\tfont-size: 16px;\r\n\tborder: 1px solid grey;\r\n\tmargin-bottom: 5px;\r\n\tz-index: 1;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.todoInput{\r\n\tborder: none;\r\n\tpadding: 15px 25px;\r\n\tfont-size: 25px;\r\n}\r\n\r\n.removeTodo{\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\tdisplay: none;\r\n\tfloat: right;\r\n\tfont-size: 20px;\r\n\topacity: 0.8;\r\n}\r\n\r\n.todoWrapper:hover .removeTodo{\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.completed{\r\n\topacity: 0.4;\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.hidden{\r\n\tdisplay: none;\r\n}\r\n\r\n.description{\r\n\twhite-space: pre-wrap;\r\n}\r\n\r\n.time{\r\n\tfont-size: 80%;\r\n}\r\n\r\n.updateTitle{\r\n\tborder: none;\r\n\tborder-bottom: 1px solid grey;\r\n\tpadding: 15px 25px;\r\n\twidth: 80%;\r\n\tfont-size: 25px;\r\n\toutline: none;\r\n}\r\n\r\n.updateDesc{\r\n\tborder: none;\r\n\tborder-bottom: 1px solid grey;\r\n\toutline: none;\r\n\tfont-size: 14px;\r\n\tresize: none;\r\n\tpadding: 15px 25px;\r\n\twidth: 80%;\r\n}\r\n\r\n.modal {\r\n\tposition: fixed;\r\n\tbackground-color: rgb(0,0,0,0);\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n\tz-index: 1;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tpadding-top: 100px;\r\n}\r\n\r\n.modal-content {\r\n\ttext-align: center;\r\n\tbackground-color: #ccb9b9;\r\n\twidth: 40%;\r\n\tmargin: auto;\r\n\tpadding: 20px;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n\t.modal-content{\r\n\t\twidth: 35%;\r\n\t} \r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n\t.modal-content{\r\n\t\tmargin-left: 120px;\r\n\t}\r\n}\r\n\r\n.btn{\r\n\tborder: none;\r\n\tpadding: 10px;\r\n\tcolor: #fff;\r\n\tborder-radius: 5px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.btn-primary{\r\n\tbackground-color: #148BE0;\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.btn-danger{\r\n\tbackground-color: #F25A4A;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/todo-item/todo-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todoWrapper\">\r\n\t\r\n\t<div [class.completed]=\"todo.completed\" class=\"todo-container\">\r\n\t\t<input type=\"checkbox\" class=\"checkbox\" (click)=\"toggleCompleted()\" [checked]=\"todo.completed\">\r\n\r\n\t\t<button class=\"btn btn-primary\" (click)=\"edit($event)\" type=\"button\">Edit</button>\r\n\t\t<button class=\"btn btn-danger\" type=\"button\" (click)=\"removeTodo()\">Delete</button>\r\n\r\n\t\t<div class=\"modal\" *ngIf=\"editing\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<h2>Update Todo</h2>\r\n\t\t\t\t<form (ngSubmit)=\"updateTodo()\">\r\n\t\t\t\t\t<input type=\"text\" name=\"title\" [(ngModel)]=\"todoText\" class=\"updateTitle\"><br><br>\r\n\t\t\t\t\t<textarea name=\"desc\" [(ngModel)]=\"todoDesc\" class=\"updateDesc\" rows=\"3\"></textarea>\r\n\t\t\t\t\t<br>\r\n\r\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Update</button>\r\n\t\t\t\t\t<button class=\"btn btn-danger\" (click)=\"edit()\" type=\"button\">Cancel</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<h2 class=\"title\">{{todo.text}}</h2>\r\n\t\t<p class=\"description\">{{todo.description}} </p>\r\n\t</div>\r\n\t\r\n\t<div class=\"time\" *ngIf=\"!todo.edited_at\">\r\n\t\tCreated: {{todo.created_at | time }}\r\n\t</div>\r\n\t<div class=\"time\" *ngIf=\"todo.edited_at\">\r\n\t\tEdited: {{todo.edited_at | time }}\r\n\t</div>\r\n\t\r\n</div>"

/***/ }),

/***/ "./src/app/todo-item/todo-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo */ "./src/app/todo.ts");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(todoService, storageService) {
        this.todoService = todoService;
        this.storageService = storageService;
        this.editing = false;
        this.isReadOnly = true;
        // this.todoService.getTodos().subscribe(todos => this.allTodos = todos);
    }
    ;
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.edit = function (e) {
        this.editing = !this.editing;
        this.todoText = this.todo.text;
        this.todoDesc = this.todo.description;
    };
    TodoItemComponent.prototype.toggleCompleted = function () {
        this.todoService.isCompleted(this.todo.id, this.todo.completed);
    };
    TodoItemComponent.prototype.updateTodo = function () {
        this.todoService.update(this.todo.id, this.todoText, this.todoDesc);
    };
    TodoItemComponent.prototype.removeTodo = function (name) {
        if (confirm("Are you sure you want to delete?")) {
            this.todoService.removeTodo(this.todo.id);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _todo__WEBPACK_IMPORTED_MODULE_1__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    TodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/todo-item/todo-item.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"], _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/app/todo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = /** @class */ (function () {
    function TodoService(storageService) {
        this.storageService = storageService;
        this.allTodos = [];
        this.todos = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.todos$ = this.todos.asObservable();
        this.loadTodos();
    }
    TodoService.prototype.addTodo = function (text, description) {
        var _this = this;
        this.storageService.getTodos().subscribe(function (todos) { return _this.allTodos = todos; });
        var todos = this.allTodos;
        if (todos.length == 0) {
            this.nextId = 0;
        }
        else {
            var maxId = todos[todos.length - 1].id;
            this.nextId = maxId + 1;
        }
        var todo = new _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"](this.nextId, text, description, false, new Date(), this.editedAt);
        todos.push(todo);
        this.storageService.setTodos(todos);
        this.nextId++;
        this.todos.next(this.allTodos);
    };
    TodoService.prototype.loadTodos = function () {
        var _this = this;
        this.storageService.getTodos().subscribe(function (todos) { return _this.allTodos = todos; });
        this.todos.next(this.allTodos);
    };
    TodoService.prototype.getTodos = function (query) {
        if (query === 'completed' || query === 'active') {
            var isCompleted_1 = query === 'completed';
            var todos = this.allTodos.filter(function (todo) { return todo.completed === isCompleted_1; });
            this.todos.next(todos);
            return this.todos.asObservable();
        }
        else {
            var todos = this.allTodos;
            this.todos.next(todos);
            return this.todos.asObservable();
        }
    };
    TodoService.prototype.removeTodo = function (selectedTodo) {
        var todos = this.allTodos;
        todos.splice(todos.findIndex(function (todo) { return todo.id == selectedTodo; }), 1);
        this.storageService.setTodos(todos);
        this.todos.next(todos);
    };
    TodoService.prototype.deleteCompleted = function () {
        var _this = this;
        var todos = this.allTodos;
        var completedTodos = todos.filter(function (todo) { return todo.completed !== true; });
        todos = completedTodos;
        this.storageService.setTodos(todos);
        this.todos.next(todos);
        this.storageService.getTodos().subscribe(function (todos) { return _this.allTodos = todos; });
    };
    TodoService.prototype.update = function (id, newValue, newDesc) {
        var _this = this;
        this.storageService.getTodos().subscribe(function (todos) { return _this.allTodos = todos; });
        var todos = this.allTodos;
        var todoToUpdate = todos.find(function (todo) { return todo.id == id; });
        todoToUpdate.text = newValue;
        todoToUpdate.description = newDesc;
        todoToUpdate.edited_at = new Date();
        this.storageService.setTodos(todos);
        this.todos.next(todos);
    };
    TodoService.prototype.isCompleted = function (id, completed) {
        var _this = this;
        this.storageService.getTodos().subscribe(function (todos) { return _this.allTodos = todos; });
        var todos = this.allTodos;
        var todoToComplete = todos.find(function (todo) { return todo.id == id; });
        todoToComplete.completed = !todoToComplete.completed;
        this.storageService.setTodos(todos);
        this.todos.next(todos);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _todo__WEBPACK_IMPORTED_MODULE_3__["Todo"])
    ], TodoService.prototype, "todo", void 0);
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todo.ts":
/*!*************************!*\
  !*** ./src/app/todo.ts ***!
  \*************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(id, text, description, completed, created_at, edited_at) {
        this.id = id;
        this.text = text;
        this.description = description;
        this.completed = completed;
        this.created_at = created_at;
        this.edited_at = edited_at;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lenovo\Desktop\taskMain\todoLastWorking\angular-mqna2r\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map