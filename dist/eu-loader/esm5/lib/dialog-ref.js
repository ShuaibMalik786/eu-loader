/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
var DialogRef = /** @class */ (function () {
    function DialogRef() {
        this._afterClosed = new Subject();
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
export { DialogRef };
if (false) {
    /** @type {?} */
    DialogRef.prototype._afterClosed;
    /** @type {?} */
    DialogRef.prototype.afterClosed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDLElBQUE7SUFDRTs0QkFHZ0MsSUFBSSxPQUFPLEVBQU87MkJBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO0tBSDlEOzs7OztJQUtELHlCQUFLOzs7O0lBQUwsVUFBTSxNQUFZO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO29CQVhIO0lBWUMsQ0FBQTtBQVZELHFCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dSZWYge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfYWZ0ZXJDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgYWZ0ZXJDbG9zZWQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuX2FmdGVyQ2xvc2VkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjbG9zZShyZXN1bHQ/OiBhbnkpIHtcclxuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQocmVzdWx0KTsgXHJcbiAgfVxyXG59XHJcbiJdfQ==