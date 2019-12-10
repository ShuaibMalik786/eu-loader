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
export { DialogInjector };
if (false) {
    /** @type {?} */
    DialogInjector.prototype._parentInjector;
    /** @type {?} */
    DialogInjector.prototype._additionalTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXUtbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1pbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsSUFBQTtJQUNFLHdCQUNVLGlCQUNBO1FBREEsb0JBQWUsR0FBZixlQUFlO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQjtLQUN2Qjs7Ozs7OztJQVFKLDRCQUFHOzs7Ozs7SUFBSCxVQUFJLEtBQVUsRUFBRSxhQUFtQixFQUFFLEtBQVc7O1FBQzlDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFL0MsSUFBSSxLQUFLO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFdkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBTSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUE7S0FDM0Q7eUJBcEJIO0lBcUJDLENBQUE7QUFuQkQsMEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIFR5cGUsIEluamVjdGlvblRva2VuLCBJbmplY3RGbGFncyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbG9nSW5qZWN0b3IgaW1wbGVtZW50cyBJbmplY3RvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9wYXJlbnRJbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIF9hZGRpdGlvbmFsVG9rZW5zOiBXZWFrTWFwPGFueSwgYW55PlxyXG4gICkge31cclxuXHJcbiAgZ2V0PFQ+KFxyXG4gICAgdG9rZW46IFR5cGU8VD4gfCBJbmplY3Rpb25Ub2tlbjxUPixcclxuICAgIG5vdEZvdW5kVmFsdWU/OiBULFxyXG4gICAgZmxhZ3M/OiBJbmplY3RGbGFnc1xyXG4gICk6IFRcclxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSlcclxuICBnZXQodG9rZW46IGFueSwgbm90Rm91bmRWYWx1ZT86IGFueSwgZmxhZ3M/OiBhbnkpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fYWRkaXRpb25hbFRva2Vucy5nZXQodG9rZW4pXHJcblxyXG4gICAgaWYgKHZhbHVlKSByZXR1cm4gdmFsdWVcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SW5qZWN0b3IuZ2V0PGFueT4odG9rZW4sIG5vdEZvdW5kVmFsdWUpXHJcbiAgfVxyXG59XHJcbiJdfQ==