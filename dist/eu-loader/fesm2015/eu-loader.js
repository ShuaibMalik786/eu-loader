import { Subject } from 'rxjs';
import { Directive, ViewContainerRef, Component, ViewChild, ComponentFactoryResolver, ChangeDetectorRef, Injectable, ApplicationRef, Injector, NgModule, defineInjectable, inject, INJECTOR } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EuPopupInsertionDirective {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
EuPopupInsertionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[euPopupInsertion]',
            },] }
];
/** @nocollapse */
EuPopupInsertionDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogRef {
    constructor() {
        this._afterClosed = new Subject();
        this.afterClosed = this._afterClosed.asObservable();
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this._afterClosed.next(result);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogConfig {
    constructor() {
        this.dismissOnClickOutside = true;
        this.spinnerColor = '#222222dc';
        this.textColor = '#222222dc';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EuLoaderComponent {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} cd
     * @param {?} dialogRef
     * @param {?} dialogConfig
     */
    constructor(componentFactoryResolver, cd, dialogRef, dialogConfig) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.dialogRef = dialogRef;
        this.dialogConfig = dialogConfig;
        this._onClose = new Subject();
        this.onClose = this._onClose.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onOverlayClicked(evt) {
        if (this.dialogConfig.dismissOnClickOutside || this.dialogConfig.dismissOnClickOutside == undefined) {
            this.dialogRef.close();
        }
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onDialogClicked(evt) {
        evt.stopPropagation();
    }
    /**
     * @param {?} componentType
     * @return {?}
     */
    loadChildComponent(componentType) {
        /** @type {?} */
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        /** @type {?} */
        let viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
}
EuLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-eu-popup',
                template: "<div class=\"eu-dialog-overlay\" (click)=\"onOverlayClicked($event)\">\r\n  <div class=\"dialog\" (click)=\"onDialogClicked($event)\">\r\n    <ng-template euPopupInsertion> </ng-template>\r\n  </div>\r\n</div>\r\n",
                styles: [".eu-dialog-overlay{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.32);-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.eu-dialog-overlay .dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.3125em;-webkit-animation:.2s pop;animation:.15s pop;padding:1.25em;border:none;background:#fff;font-family:inherit;font-size:1rem;max-width:100vw}@-webkit-keyframes pop{0%{-webkit-transform:scale(.5,.5)}100%{-webkit-transform:scale(1,1)}}"]
            }] }
];
/** @nocollapse */
EuLoaderComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: DialogRef },
    { type: DialogConfig }
];
EuLoaderComponent.propDecorators = {
    insertionPoint: [{ type: ViewChild, args: [EuPopupInsertionDirective, { read: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DialogInjector {
    /**
     * @param {?} _parentInjector
     * @param {?} _additionalTokens
     */
    constructor(_parentInjector, _additionalTokens) {
        this._parentInjector = _parentInjector;
        this._additionalTokens = _additionalTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @param {?=} flags
     * @return {?}
     */
    get(token, notFoundValue, flags) {
        /** @type {?} */
        const value = this._additionalTokens.get(token);
        if (value)
            return value;
        return this._parentInjector.get(token, notFoundValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LoaderComponent {
    /**
     * @param {?} config
     * @param {?} dialog
     */
    constructor(config, dialog) {
        this.config = config;
        this.dialog = dialog;
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dialog.close(false);
    }
    /**
     * @return {?}
     */
    onOk() {
        this.dialog.close(true);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-eu-loader',
                template: "<div class=\"container\">\r\n    <div class=\"loaderContainer\">\r\n        <div class=\"sbl-circ\"\r\n        [style.color]=\"config?.spinnerColor\"\r\n        ></div>\r\n    </div>\r\n    <div class=\"text\" \r\n    *ngIf=\"config?.text\"\r\n    [style.color]=\"config?.textColor\"\r\n    >{{config?.text}}</div>\r\n</div>",
                styles: [".sbl-circ{height:35px;width:35px;color:#222222dc;position:relative;display:inline-block;border:5px solid;border-radius:50%;border-top-color:transparent;animation:1s linear infinite rotate;-webkit-animation:1s linear infinite rotate}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.container{max-width:10rem;padding:0 10px}.loaderContainer{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.text{padding-top:10px;text-align:center;overflow-wrap:break-word}"]
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [
    { type: DialogConfig },
    { type: DialogRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EuLoaderService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    open(config) {
        /** @type {?} */
        const loaderRef = this.appendDialogComponentToBody(config);
        this.dialogComponentRef.instance.childComponentType = LoaderComponent;
        return loaderRef;
    }
    /**
     * @return {?}
     */
    close() {
        this.removeLoaderComponentFromBody();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    appendDialogComponentToBody(config) {
        /** @type {?} */
        const map = new WeakMap();
        map.set(DialogConfig, config);
        /** @type {?} */
        const dialogRef = new DialogRef();
        map.set(DialogRef, dialogRef);
        /** @type {?} */
        const sub = dialogRef.afterClosed.subscribe(() => {
            // close the dialog
            this.removeLoaderComponentFromBody();
            sub.unsubscribe();
        });
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EuLoaderComponent);
        /** @type {?} */
        const componentRef = componentFactory.create(new DialogInjector(this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
        document.body.appendChild(domElem);
        this.dialogComponentRef = componentRef;
        this.dialogComponentRef.instance.onClose.subscribe(() => {
            this.removeLoaderComponentFromBody();
        });
        // return the dialogRef
        return dialogRef;
    }
    /**
     * @return {?}
     */
    removeLoaderComponentFromBody() {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
    }
}
EuLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EuLoaderService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ EuLoaderService.ngInjectableDef = defineInjectable({ factory: function EuLoaderService_Factory() { return new EuLoaderService(inject(ComponentFactoryResolver), inject(ApplicationRef), inject(INJECTOR)); }, token: EuLoaderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EuLoaderModule {
}
EuLoaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EuLoaderComponent,
                    EuPopupInsertionDirective,
                    LoaderComponent
                ],
                imports: [
                    CommonModule,
                    BrowserModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { EuLoaderService, EuLoaderComponent, EuLoaderModule, DialogConfig as ɵc, DialogRef as ɵb, EuPopupInsertionDirective as ɵa, LoaderComponent as ɵd };

//# sourceMappingURL=eu-loader.js.map