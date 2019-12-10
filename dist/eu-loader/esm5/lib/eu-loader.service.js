/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, } from '@angular/core';
import { EuLoaderComponent } from './eu-loader.component';
import { DialogConfig } from './dialog-config';
import { DialogInjector } from './dialog-injector';
import { DialogRef } from './dialog-ref';
import { LoaderComponent } from './loader/loader.component';
import * as i0 from "@angular/core";
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
        var domElem = /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    EuLoaderService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ EuLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function EuLoaderService_Factory() { return new EuLoaderService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR)); }, token: EuLoaderService, providedIn: "root" });
    return EuLoaderService;
}());
export { EuLoaderService };
if (false) {
    /** @type {?} */
    EuLoaderService.prototype.dialogComponentRef;
    /** @type {?} */
    EuLoaderService.prototype.componentFactoryResolver;
    /** @type {?} */
    EuLoaderService.prototype.appRef;
    /** @type {?} */
    EuLoaderService.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXUtbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ldS1sb2FkZXIvIiwic291cmNlcyI6WyJsaWIvZXUtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1Ysd0JBQXdCLEVBQ3hCLGNBQWMsRUFDZCxRQUFRLEdBR1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0lBUzFELHlCQUNVLDBCQUNBLFFBQ0E7UUFGQSw2QkFBd0IsR0FBeEIsd0JBQXdCO1FBQ3hCLFdBQU0sR0FBTixNQUFNO1FBQ04sYUFBUSxHQUFSLFFBQVE7S0FFakI7Ozs7O0lBR00sOEJBQUk7Ozs7Y0FBQyxNQUFvQjs7UUFDOUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEdBQUcsZUFBZSxDQUFDO1FBQ3RFLE9BQU8sU0FBUyxDQUFDOzs7OztJQUlaLCtCQUFLOzs7O1FBQ1YsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7Ozs7OztJQUcvQixxREFBMkI7Ozs7Y0FBQyxNQUFvQjs7O1FBQ3RELElBQU0sR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7O1FBRzlCLElBQU0sU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7O1FBRzlCLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDOztZQUUxQyxBQURBLG1CQUFtQjtZQUNuQixLQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUNyQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDOztRQUVILElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUM7O1FBQ2xHLElBQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUU5QyxJQUFNLE9BQU8scUJBQUcsbUJBQUMsWUFBWSxDQUFDLFFBQWdDLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFnQixFQUFDO1FBQzVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7UUFFdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2pELEtBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO1NBQ3RDLENBQUMsQ0FBQzs7UUFHSCxPQUFPLFNBQVMsQ0FBQzs7Ozs7SUFHWCx1REFBNkI7Ozs7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7O2dCQTdEckMsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFkQyx3QkFBd0I7Z0JBQ3hCLGNBQWM7Z0JBQ2QsUUFBUTs7OzBCQUpWOztTQWlCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBBcHBsaWNhdGlvblJlZixcbiAgSW5qZWN0b3IsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQ29tcG9uZW50UmVmLCBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV1TG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9ldS1sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERpYWxvZ0NvbmZpZyB9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XG5pbXBvcnQgeyBEaWFsb2dJbmplY3RvciB9IGZyb20gJy4vZGlhbG9nLWluamVjdG9yJztcbmltcG9ydCB7IERpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXVMb2FkZXJTZXJ2aWNlIHtcblxuICBkaWFsb2dDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxFdUxvYWRlckNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gIH1cblxuXG4gIHB1YmxpYyBvcGVuKGNvbmZpZzogRGlhbG9nQ29uZmlnKSB7XG4gICAgY29uc3QgbG9hZGVyUmVmID0gdGhpcy5hcHBlbmREaWFsb2dDb21wb25lbnRUb0JvZHkoY29uZmlnKTtcbiAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZi5pbnN0YW5jZS5jaGlsZENvbXBvbmVudFR5cGUgPSBMb2FkZXJDb21wb25lbnQ7XG4gICAgcmV0dXJuIGxvYWRlclJlZjtcbiAgfVxuXG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMucmVtb3ZlTG9hZGVyQ29tcG9uZW50RnJvbUJvZHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kRGlhbG9nQ29tcG9uZW50VG9Cb2R5KGNvbmZpZzogRGlhbG9nQ29uZmlnKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICBtYXAuc2V0KERpYWxvZ0NvbmZpZywgY29uZmlnKTtcblxuICAgIC8vIGFkZCB0aGUgRGlhbG9nUmVmIHRvIGRlcGVuZGVuY3kgaW5qZWN0aW9uXG4gICAgY29uc3QgZGlhbG9nUmVmID0gbmV3IERpYWxvZ1JlZigpO1xuICAgIG1hcC5zZXQoRGlhbG9nUmVmLCBkaWFsb2dSZWYpO1xuXG4gICAgLy8gd2Ugd2FudCB0byBrbm93IHdoZW4gc29tZWJvZHkgY2FsbGVkIHRoZSBjbG9zZSBtZWh0b2RcbiAgICBjb25zdCBzdWIgPSBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIC8vIGNsb3NlIHRoZSBkaWFsb2dcbiAgICAgIHRoaXMucmVtb3ZlTG9hZGVyQ29tcG9uZW50RnJvbUJvZHkoKTtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEV1TG9hZGVyQ29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZShuZXcgRGlhbG9nSW5qZWN0b3IodGhpcy5pbmplY3RvciwgbWFwKSk7XG5cbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XG5cbiAgICB0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZiA9IGNvbXBvbmVudFJlZjtcblxuICAgIHRoaXMuZGlhbG9nQ29tcG9uZW50UmVmLmluc3RhbmNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlTG9hZGVyQ29tcG9uZW50RnJvbUJvZHkoKTtcbiAgICB9KTtcblxuICAgIC8vIHJldHVybiB0aGUgZGlhbG9nUmVmXG4gICAgcmV0dXJuIGRpYWxvZ1JlZjtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTG9hZGVyQ29tcG9uZW50RnJvbUJvZHkoKSB7XG4gICAgdGhpcy5hcHBSZWYuZGV0YWNoVmlldyh0aGlzLmRpYWxvZ0NvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgdGhpcy5kaWFsb2dDb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=