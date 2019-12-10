(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('eu-loader', ['exports', 'rxjs', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (factory((global['eu-loader'] = {}),global.rxjs,global.ng.core,global.ng.common,global.ng.platformBrowser));
}(this, (function (exports,rxjs,i0,common,platformBrowser) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EuPopupInsertionDirective = /** @class */ (function () {
        function EuPopupInsertionDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        EuPopupInsertionDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[euPopupInsertion]',
                    },] }
        ];
        /** @nocollapse */
        EuPopupInsertionDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef }
            ];
        };
        return EuPopupInsertionDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogRef = /** @class */ (function () {
        function DialogRef() {
            this._afterClosed = new rxjs.Subject();
            this.afterClosed = this._afterClosed.asObservable();
        }
        /**
         * @param {?=} result
         * @return {?}
         */
        DialogRef.prototype.close = /**
         * @param {?=} result
         * @return {?}
         */
            function (result) {
                this._afterClosed.next(result);
            };
        return DialogRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogConfig = /** @class */ (function () {
        function DialogConfig() {
            this.dismissOnClickOutside = true;
            this.spinnerColor = '#222222dc';
            this.textColor = '#222222dc';
        }
        return DialogConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EuLoaderComponent = /** @class */ (function () {
        function EuLoaderComponent(componentFactoryResolver, cd, dialogRef, dialogConfig) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.cd = cd;
            this.dialogRef = dialogRef;
            this.dialogConfig = dialogConfig;
            this._onClose = new rxjs.Subject();
            this.onClose = this._onClose.asObservable();
        }
        /**
         * @return {?}
         */
        EuLoaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        EuLoaderComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.loadChildComponent(this.childComponentType);
                this.cd.detectChanges();
            };
        /**
         * @return {?}
         */
        EuLoaderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.componentRef) {
                    this.componentRef.destroy();
                }
            };
        /**
         * @param {?} evt
         * @return {?}
         */
        EuLoaderComponent.prototype.onOverlayClicked = /**
         * @param {?} evt
         * @return {?}
         */
            function (evt) {
                if (this.dialogConfig.dismissOnClickOutside || this.dialogConfig.dismissOnClickOutside == undefined) {
                    this.dialogRef.close();
                }
            };
        /**
         * @param {?} evt
         * @return {?}
         */
        EuLoaderComponent.prototype.onDialogClicked = /**
         * @param {?} evt
         * @return {?}
         */
            function (evt) {
                evt.stopPropagation();
            };
        /**
         * @param {?} componentType
         * @return {?}
         */
        EuLoaderComponent.prototype.loadChildComponent = /**
         * @param {?} componentType
         * @return {?}
         */
            function (componentType) {
                /** @type {?} */
                var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
                /** @type {?} */
                var viewContainerRef = this.insertionPoint.viewContainerRef;
                viewContainerRef.clear();
                this.componentRef = viewContainerRef.createComponent(componentFactory);
            };
        EuLoaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-eu-popup',
                        template: "<div class=\"eu-dialog-overlay\" (click)=\"onOverlayClicked($event)\">\r\n  <div class=\"dialog\" (click)=\"onDialogClicked($event)\">\r\n    <ng-template euPopupInsertion> </ng-template>\r\n  </div>\r\n</div>\r\n",
                        styles: [".eu-dialog-overlay{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.32);-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.eu-dialog-overlay .dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.3125em;-webkit-animation:.2s pop;animation:.15s pop;padding:1.25em;border:none;background:#fff;font-family:inherit;font-size:1rem;max-width:100vw}@-webkit-keyframes pop{0%{-webkit-transform:scale(.5,.5)}100%{-webkit-transform:scale(1,1)}}"]
                    }] }
        ];
        /** @nocollapse */
        EuLoaderComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ChangeDetectorRef },
                { type: DialogRef },
                { type: DialogConfig }
            ];
        };
        EuLoaderComponent.propDecorators = {
            insertionPoint: [{ type: i0.ViewChild, args: [EuPopupInsertionDirective, { read: false },] }]
        };
        return EuLoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DialogInjector = /** @class */ (function () {
        function DialogInjector(_parentInjector, _additionalTokens) {
            this._parentInjector = _parentInjector;
            this._additionalTokens = _additionalTokens;
        }
        /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @param {?=} flags
         * @return {?}
         */
        DialogInjector.prototype.get = /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @param {?=} flags
         * @return {?}
         */
            function (token, notFoundValue, flags) {
                /** @type {?} */
                var value = this._additionalTokens.get(token);
                if (value)
                    return value;
                return this._parentInjector.get(token, notFoundValue);
            };
        return DialogInjector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LoaderComponent = /** @class */ (function () {
        function LoaderComponent(config, dialog) {
            this.config = config;
            this.dialog = dialog;
        }
        /**
         * @return {?}
         */
        LoaderComponent.prototype.onCancel = /**
         * @return {?}
         */
            function () {
                this.dialog.close(false);
            };
        /**
         * @return {?}
         */
        LoaderComponent.prototype.onOk = /**
         * @return {?}
         */
            function () {
                this.dialog.close(true);
            };
        /**
         * @return {?}
         */
        LoaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LoaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-eu-loader',
                        template: "<div class=\"container\">\r\n    <div class=\"loaderContainer\">\r\n        <div class=\"sbl-circ\"\r\n        [style.color]=\"config?.spinnerColor\"\r\n        ></div>\r\n    </div>\r\n    <div class=\"text\" \r\n    *ngIf=\"config?.text\"\r\n    [style.color]=\"config?.textColor\"\r\n    >{{config?.text}}</div>\r\n</div>",
                        styles: [".sbl-circ{height:35px;width:35px;color:#222222dc;position:relative;display:inline-block;border:5px solid;border-radius:50%;border-top-color:transparent;animation:1s linear infinite rotate;-webkit-animation:1s linear infinite rotate}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.container{max-width:10rem;padding:0 10px}.loaderContainer{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.text{padding-top:10px;text-align:center;overflow-wrap:break-word}"]
                    }] }
        ];
        /** @nocollapse */
        LoaderComponent.ctorParameters = function () {
            return [
                { type: DialogConfig },
                { type: DialogRef }
            ];
        };
        return LoaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EuLoaderService = /** @class */ (function () {
        function EuLoaderService(componentFactoryResolver, appRef, injector) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.appRef = appRef;
            this.injector = injector;
        }
        /**
         * @param {?} config
         * @return {?}
         */
        EuLoaderService.prototype.open = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                /** @type {?} */
                var loaderRef = this.appendDialogComponentToBody(config);
                this.dialogComponentRef.instance.childComponentType = LoaderComponent;
                return loaderRef;
            };
        /**
         * @return {?}
         */
        EuLoaderService.prototype.close = /**
         * @return {?}
         */
            function () {
                this.removeLoaderComponentFromBody();
            };
        /**
         * @param {?} config
         * @return {?}
         */
        EuLoaderService.prototype.appendDialogComponentToBody = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                var _this = this;
                /** @type {?} */
                var map = new WeakMap();
                map.set(DialogConfig, config);
                /** @type {?} */
                var dialogRef = new DialogRef();
                map.set(DialogRef, dialogRef);
                /** @type {?} */
                var sub = dialogRef.afterClosed.subscribe(function () {
                    // close the dialog
                    // close the dialog
                    _this.removeLoaderComponentFromBody();
                    sub.unsubscribe();
                });
                /** @type {?} */
                var componentFactory = this.componentFactoryResolver.resolveComponentFactory(EuLoaderComponent);
                /** @type {?} */
                var componentRef = componentFactory.create(new DialogInjector(this.injector, map));
                this.appRef.attachView(componentRef.hostView);
                /** @type {?} */
                var domElem = /** @type {?} */ (( /** @type {?} */(componentRef.hostView)).rootNodes[0]);
                document.body.appendChild(domElem);
                this.dialogComponentRef = componentRef;
                this.dialogComponentRef.instance.onClose.subscribe(function () {
                    _this.removeLoaderComponentFromBody();
                });
                // return the dialogRef
                return dialogRef;
            };
        /**
         * @return {?}
         */
        EuLoaderService.prototype.removeLoaderComponentFromBody = /**
         * @return {?}
         */
            function () {
                this.appRef.detachView(this.dialogComponentRef.hostView);
                this.dialogComponentRef.destroy();
            };
        EuLoaderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EuLoaderService.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ApplicationRef },
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ EuLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function EuLoaderService_Factory() { return new EuLoaderService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR)); }, token: EuLoaderService, providedIn: "root" });
        return EuLoaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EuLoaderModule = /** @class */ (function () {
        function EuLoaderModule() {
        }
        EuLoaderModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            EuLoaderComponent,
                            EuPopupInsertionDirective,
                            LoaderComponent
                        ],
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            EuLoaderComponent,
                            EuPopupInsertionDirective,
                            LoaderComponent
                        ],
                        entryComponents: [
                            EuLoaderComponent,
                            LoaderComponent
                        ],
                    },] }
        ];
        return EuLoaderModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.EuLoaderService = EuLoaderService;
    exports.EuLoaderComponent = EuLoaderComponent;
    exports.EuLoaderModule = EuLoaderModule;
    exports.ɵc = DialogConfig;
    exports.ɵb = DialogRef;
    exports.ɵa = EuPopupInsertionDirective;
    exports.ɵd = LoaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=eu-loader.umd.js.map