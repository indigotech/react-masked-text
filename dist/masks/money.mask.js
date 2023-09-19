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
import BaseMask from './base.mask';
var MONEY_MASK_SETTINGS = {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$ ',
    suffixUnit: '',
    zeroCents: false,
};
var MoneyMask = /** @class */ (function (_super) {
    __extends(MoneyMask, _super);
    function MoneyMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoneyMask.getType = function () {
        return 'money';
    };
    MoneyMask.prototype.getValue = function (value, settings, oldValue) {
        var mergedSettings = _super.prototype.mergeSettings.call(this, MONEY_MASK_SETTINGS, settings);
        if (mergedSettings.suffixUnit && oldValue && value) {
            if (value.length === oldValue.length - 1) {
                var cleared = this.removeNotNumbers(value);
                value = cleared.substring(0, cleared.length - 1);
            }
        }
        var masked = this.getVMasker().toMoney(value, mergedSettings);
        return masked;
    };
    MoneyMask.prototype.getRawValue = function (maskedValue, settings) {
        var mergedSettings = _super.prototype.mergeSettings.call(this, MONEY_MASK_SETTINGS, settings);
        var normalized = _super.prototype.removeNotNumbers.call(this, maskedValue);
        var dotPosition = normalized.length - mergedSettings.precision;
        normalized = this._insert(normalized, dotPosition, '.');
        return Number(normalized);
    };
    MoneyMask.prototype.validate = function () {
        return true;
    };
    MoneyMask.prototype._insert = function (text, index, stringToInsert) {
        if (index > 0) {
            return text.substring(0, index) + stringToInsert + text.substring(index, text.length);
        }
        else {
            return stringToInsert + text;
        }
    };
    return MoneyMask;
}(BaseMask));
export { MoneyMask };
//# sourceMappingURL=money.mask.js.map