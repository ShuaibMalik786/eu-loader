/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
export class DialogRef {
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
if (false) {
    /** @type {?} */
    DialogRef.prototype._afterClosed;
    /** @type {?} */
    DialogRef.prototype.afterClosed;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V1LWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDLE1BQU07SUFDSjs0QkFHZ0MsSUFBSSxPQUFPLEVBQU87MkJBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO0tBSDlEOzs7OztJQUtELEtBQUssQ0FBQyxNQUFZO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWxvZ1JlZiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9hZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBhZnRlckNsb3NlZDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5fYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IGFueSkge1xyXG4gICAgdGhpcy5fYWZ0ZXJDbG9zZWQubmV4dChyZXN1bHQpOyBcclxuICB9XHJcbn1cclxuIl19