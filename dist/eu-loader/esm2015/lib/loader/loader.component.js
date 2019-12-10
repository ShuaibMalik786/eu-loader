/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DialogConfig } from '../dialog-config';
export class LoaderComponent {
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
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.config;
    /** @type {?} */
    LoaderComponent.prototype.dialog;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU9oRCxNQUFNOzs7OztJQUNKLFlBQW1CLE1BQW9CLEVBQVMsTUFBaUI7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7S0FDaEU7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7SUFFRCxRQUFRO0tBQ1A7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGdWQUFzQzs7YUFFdkM7Ozs7WUFOUSxZQUFZO1lBRFosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlhbG9nUmVmIH0gZnJvbSAnLi4vZGlhbG9nLXJlZic7XHJcbmltcG9ydCB7IERpYWxvZ0NvbmZpZyB9IGZyb20gJy4uL2RpYWxvZy1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZXUtbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBEaWFsb2dDb25maWcsIHB1YmxpYyBkaWFsb2c6IERpYWxvZ1JlZikge1xyXG4gIH1cclxuXHJcbiAgb25DYW5jZWwoKSB7XHJcbiAgICB0aGlzLmRpYWxvZy5jbG9zZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvbk9rKCkge1xyXG4gICAgdGhpcy5kaWFsb2cuY2xvc2UodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19