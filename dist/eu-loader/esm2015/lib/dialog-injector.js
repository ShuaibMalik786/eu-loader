/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class DialogInjector {
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
if (false) {
    /** @type {?} */
    DialogInjector.prototype._parentInjector;
    /** @type {?} */
    DialogInjector.prototype._additionalTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZXUtbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy1pbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTTs7Ozs7SUFDSixZQUNVLGlCQUNBO1FBREEsb0JBQWUsR0FBZixlQUFlO1FBQ2Ysc0JBQWlCLEdBQWpCLGlCQUFpQjtLQUN2Qjs7Ozs7OztJQVFKLEdBQUcsQ0FBQyxLQUFVLEVBQUUsYUFBbUIsRUFBRSxLQUFXOztRQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRS9DLElBQUksS0FBSztZQUFFLE9BQU8sS0FBSyxDQUFBO1FBRXZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFBO0tBQzNEO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgVHlwZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdEZsYWdzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dJbmplY3RvciBpbXBsZW1lbnRzIEluamVjdG9yIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3BhcmVudEluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgX2FkZGl0aW9uYWxUb2tlbnM6IFdlYWtNYXA8YW55LCBhbnk+XHJcbiAgKSB7fVxyXG5cclxuICBnZXQ8VD4oXHJcbiAgICB0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+LFxyXG4gICAgbm90Rm91bmRWYWx1ZT86IFQsXHJcbiAgICBmbGFncz86IEluamVjdEZsYWdzXHJcbiAgKTogVFxyXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55KVxyXG4gIGdldCh0b2tlbjogYW55LCBub3RGb3VuZFZhbHVlPzogYW55LCBmbGFncz86IGFueSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9hZGRpdGlvbmFsVG9rZW5zLmdldCh0b2tlbilcclxuXHJcbiAgICBpZiAodmFsdWUpIHJldHVybiB2YWx1ZVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnRJbmplY3Rvci5nZXQ8YW55Pih0b2tlbiwgbm90Rm91bmRWYWx1ZSlcclxuICB9XHJcbn1cclxuIl19