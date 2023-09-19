var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript
import BaseMask from './base.mask';
import { parseStringDate } from './internal-dependencies/date-parser';
var DATETIME_MASK_SETTINGS = {
    format: 'DD/MM/YYYY HH:mm:ss',
};
var DatetimeMask = /** @class */ (function (_super) {
    __extends(DatetimeMask, _super);
    function DatetimeMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatetimeMask.getType = function () {
        return 'datetime';
    };
    DatetimeMask.prototype.getValue = function (value, settings) {
        var mergedSettings = this._getMergedSettings(settings);
        var mask = '';
        for (var i = 0; i < mergedSettings.format.length; i++) {
            mask += mergedSettings.format[i].replace(/[a-zA-Z]+/g, '9');
        }
        return this.getVMasker().toPattern(value, mask);
    };
    DatetimeMask.prototype.getRawValue = function (maskedValue, settings) {
        var mergedSettings = this._getMergedSettings(settings);
        return parseStringDate(maskedValue, mergedSettings.format);
    };
    DatetimeMask.prototype.validate = function (value, settings) {
        var maskedValue = this.getValue(value, settings);
        var mergedSettings = this._getMergedSettings(settings);
        var date = parseStringDate(maskedValue, mergedSettings.format);
        var isValid = this._isValidDate(date);
        return isValid;
    };
    DatetimeMask.prototype._getMergedSettings = function (settings) {
        return _super.prototype.mergeSettings.call(this, DATETIME_MASK_SETTINGS, settings);
    };
    /** https://stackoverflow.com/a/1353711/3670829 */
    DatetimeMask.prototype._isValidDate = function (d) {
        return d instanceof Date && !isNaN(d.getTime());
    };
    return DatetimeMask;
}(BaseMask));
export { DatetimeMask };
//# sourceMappingURL=datetime.mask.js.map