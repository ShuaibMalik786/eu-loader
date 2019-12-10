/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DialogConfig } from '../dialog-config';
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
        { type: Component, args: [{
                    selector: 'lib-eu-loader',
                    template: "<div class=\"container\">\r\n    <div class=\"loaderContainer\">\r\n        <div class=\"sbl-circ\"\r\n        [style.color]=\"config?.spinnerColor\"\r\n        ></div>\r\n    </div>\r\n    <div class=\"text\" \r\n    *ngIf=\"config?.text\"\r\n    [style.color]=\"config?.textColor\"\r\n    >{{config?.text}}</div>\r\n</div>",
                    styles: [".sbl-circ{height:35px;width:35px;color:#222222dc;position:relative;display:inline-block;border:5px solid;border-radius:50%;border-top-color:transparent;animation:1s linear infinite rotate;-webkit-animation:1s linear infinite rotate}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.container{max-width:10rem;padding:0 10px}.loaderContainer{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.text{padding-top:10px;text-align:center;overflow-wrap:break-word}"]
                }] }
    ];
    /** @nocollapse */
    LoaderComponent.ctorParameters = function () { return [
        { type: DialogConfig },
        { type: DialogRef }
    ]; };
    return LoaderComponent;
}());
export { LoaderComponent };
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.config;
    /** @type {?} */
    LoaderComponent.prototype.dialog;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7SUFROUMseUJBQW1CLE1BQW9CLEVBQVMsTUFBaUI7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7S0FDaEU7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7OztJQUVELDhCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBRUQsa0NBQVE7OztJQUFSO0tBQ0M7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGdWQUFzQzs7aUJBRXZDOzs7O2dCQU5RLFlBQVk7Z0JBRFosU0FBUzs7MEJBSmxCOztTQVlhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpYWxvZ1JlZiB9IGZyb20gJy4uL2RpYWxvZy1yZWYnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb25maWcgfSBmcm9tICcuLi9kaWFsb2ctY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWV1LWxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZzogRGlhbG9nQ29uZmlnLCBwdWJsaWMgZGlhbG9nOiBEaWFsb2dSZWYpIHtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5kaWFsb2cuY2xvc2UoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25PaygpIHtcclxuICAgIHRoaXMuZGlhbG9nLmNsb3NlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==