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
var PHONE_8_MASK = '9999-9999';
var PHONE_9_MASK = '99999-9999';
var CEL_PHONE_SETTINGS = {
    withDDD: true,
    dddMask: '(99) ',
};
var CelPhoneMask = /** @class */ (function (_super) {
    __extends(CelPhoneMask, _super);
    function CelPhoneMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CelPhoneMask.getType = function () {
        return 'cel-phone';
    };
    CelPhoneMask.prototype.getValue = function (value, settings) {
        var mask = this._getMask(value, settings);
        return this.getVMasker().toPattern(value, mask);
    };
    CelPhoneMask.prototype.getRawValue = function (maskedValue) {
        return _super.prototype.removeNotNumbers.call(this, maskedValue);
    };
    CelPhoneMask.prototype.validate = function (value, settings) {
        var valueToValidate = _super.prototype.getDefaultValue.call(this, value);
        valueToValidate = this.getValue(value, settings);
        var mask = this._getMask(value, settings);
        return valueToValidate.length === mask.length;
    };
    CelPhoneMask.prototype._getMask = function (value, settings) {
        var _this = this;
        var mergedSettings = _super.prototype.mergeSettings.call(this, CEL_PHONE_SETTINGS, settings);
        var numbers = _super.prototype.removeNotNumbers.call(this, value);
        var mask = PHONE_8_MASK;
        var use9DigitMask = (function () {
            if (mergedSettings.withDDD) {
                var numbersDDD = _super.prototype.removeNotNumbers.call(_this, mergedSettings.dddMask);
                var remainingValueNumbers = numbers.substring(numbersDDD.length);
                return remainingValueNumbers.length >= 9;
            }
            else {
                return numbers.length >= 9;
            }
        })();
        if (use9DigitMask) {
            mask = PHONE_9_MASK;
        }
        if (mergedSettings.withDDD) {
            mask = "".concat(mergedSettings.dddMask).concat(mask);
        }
        return mask;
    };
    return CelPhoneMask;
}(BaseMask));
export { CelPhoneMask };
//# sourceMappingURL=cel-phone.mask.js.map