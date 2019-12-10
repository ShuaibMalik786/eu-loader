/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { EuPopupInsertionDirective } from './eu-popup-insertion.directive';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';
var EuLoaderComponent = /** @class */ (function () {
    function EuLoaderComponent(componentFactoryResolver, cd, dialogRef, dialogConfig) {
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
        { type: Component, args: [{
                    selector: 'lib-eu-popup',
                    template: "<div class=\"eu-dialog-overlay\" (click)=\"onOverlayClicked($event)\">\r\n  <div class=\"dialog\" (click)=\"onDialogClicked($event)\">\r\n    <ng-template euPopupInsertion> </ng-template>\r\n  </div>\r\n</div>\r\n",
                    styles: [".eu-dialog-overlay{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.32);-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.eu-dialog-overlay .dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;border-radius:.3125em;-webkit-animation:.2s pop;animation:.15s pop;padding:1.25em;border:none;background:#fff;font-family:inherit;font-size:1rem;max-width:100vw}@-webkit-keyframes pop{0%{-webkit-transform:scale(.5,.5)}100%{-webkit-transform:scale(1,1)}}"]
                }] }
    ];
    /** @nocollapse */
    EuLoaderComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef },
        { type: DialogRef },
        { type: DialogConfig }
    ]; };
    EuLoaderComponent.propDecorators = {
        insertionPoint: [{ type: ViewChild, args: [EuPopupInsertionDirective, { read: false },] }]
    };
    return EuLoaderComponent;
}());
export { EuLoaderComponent };
if (false) {
    /** @type {?} */
    EuLoaderComponent.prototype._onClose;
    /** @type {?} */
    EuLoaderComponent.prototype.componentRef;
    /** @type {?} */
    EuLoaderComponent.prototype.childComponentType;
    /** @type {?} */
    EuLoaderComponent.prototype.onClose;
    /** @type {?} */
    EuLoaderComponent.prototype.insertionPoint;
    /** @type {?} */
    EuLoaderComponent.prototype.componentFactoryResolver;
    /** @type {?} */
    EuLoaderComponent.prototype.cd;
    /** @type {?} */
    EuLoaderComponent.prototype.dialogRef;
    /** @type {?} */
    EuLoaderComponent.prototype.dialogConfig;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXUtbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9ldS1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQU1ULFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0lBZ0I3QywyQkFDVSwwQkFDQSxJQUNBLFdBQ0E7UUFIQSw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3hCLE9BQUUsR0FBRixFQUFFO1FBQ0YsY0FBUyxHQUFULFNBQVM7UUFDVCxpQkFBWSxHQUFaLFlBQVk7d0JBWk0sSUFBSSxPQUFPLEVBQU87dUJBSTdCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO0tBVTVDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0tBQ0M7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0tBQ0Y7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLEdBQWU7UUFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLElBQUksU0FBUyxFQUFFO1lBQ25HLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDeEI7S0FDRjs7Ozs7SUFFRCwyQ0FBZTs7OztJQUFmLFVBQWdCLEdBQWU7UUFDN0IsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3ZCOzs7OztJQUVELDhDQUFrQjs7OztJQUFsQixVQUFtQixhQUF3Qjs7UUFDekMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLENBQUM7O1FBRTVGLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1RCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3hFOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixpT0FBd0M7O2lCQUV6Qzs7OztnQkFaQyx3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFJVixTQUFTO2dCQUNULFlBQVk7OztpQ0FjbEIsU0FBUyxTQUFDLHlCQUF5QixFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7NEJBNUJ2RDs7U0FxQmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUeXBlLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uSW5pdCxcbiAgQ29tcG9uZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFdVBvcHVwSW5zZXJ0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ldS1wb3B1cC1pbnNlcnRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IERpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZXUtcG9wdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXUtcG9wdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ldS1wb3B1cC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV1TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlYWRvbmx5IF9vbkNsb3NlID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIHB1YmxpYyBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuICBwdWJsaWMgY2hpbGRDb21wb25lbnRUeXBlOiBUeXBlPGFueT47XG4gIHB1YmxpYyBvbkNsb3NlID0gdGhpcy5fb25DbG9zZS5hc09ic2VydmFibGUoKTtcblxuICBAVmlld0NoaWxkKEV1UG9wdXBJbnNlcnRpb25EaXJlY3RpdmUsIHsgcmVhZDogZmFsc2UgfSkgaW5zZXJ0aW9uUG9pbnQ6IEV1UG9wdXBJbnNlcnRpb25EaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGRpYWxvZ1JlZjogRGlhbG9nUmVmLFxuICAgIHByaXZhdGUgZGlhbG9nQ29uZmlnOiBEaWFsb2dDb25maWcsXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5sb2FkQ2hpbGRDb21wb25lbnQodGhpcy5jaGlsZENvbXBvbmVudFR5cGUpO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgb25PdmVybGF5Q2xpY2tlZChldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaWFsb2dDb25maWcuZGlzbWlzc09uQ2xpY2tPdXRzaWRlIHx8IHRoaXMuZGlhbG9nQ29uZmlnLmRpc21pc3NPbkNsaWNrT3V0c2lkZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgb25EaWFsb2dDbGlja2VkKGV2dDogTW91c2VFdmVudCkge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGxvYWRDaGlsZENvbXBvbmVudChjb21wb25lbnRUeXBlOiBUeXBlPGFueT4pIHtcbiAgICBsZXQgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUpO1xuXG4gICAgbGV0IHZpZXdDb250YWluZXJSZWYgPSB0aGlzLmluc2VydGlvblBvaW50LnZpZXdDb250YWluZXJSZWY7XG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIl19