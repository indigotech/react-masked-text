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
var CREDIT_CARD_MASK = '9999 9999 9999 9999';
var CREDIT_CARD_OBFUSCATED_MASK = '9999 **** **** 9999';
var CREDIT_CARD_SETTINGS = {
    obfuscated: false,
};
var CreditCardMask = /** @class */ (function (_super) {
    __extends(CreditCardMask, _super);
    function CreditCardMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardMask.getType = function () {
        return 'credit-card';
    };
    CreditCardMask.prototype.getValue = function (value, settings) {
        var selectedMask = this._getMask(settings);
        return this.getVMasker().toPattern(value, selectedMask);
    };
    CreditCardMask.prototype.validate = function (value, settings) {
        if (!!value) {
            var selectedMask = this._getMask(settings);
            return value.length === selectedMask.length;
        }
        return true;
    };
    CreditCardMask.prototype.getRawValue = function (maskedValue) {
        if (!maskedValue)
            return [];
        return maskedValue.split(' ').map(function (val) {
            if (!val)
                return '';
            return val.trim();
        });
    };
    CreditCardMask.prototype._getMask = function (settings) {
        var mergedSettings = _super.prototype.mergeSettings.call(this, CREDIT_CARD_SETTINGS, settings);
        var selectedMask = mergedSettings.obfuscated ? CREDIT_CARD_OBFUSCATED_MASK : CREDIT_CARD_MASK;
        return selectedMask;
    };
    return CreditCardMask;
}(BaseMask));
export { CreditCardMask };
//# sourceMappingURL=credit-card.mask.js.map