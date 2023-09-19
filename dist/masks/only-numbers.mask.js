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
var OnlyNumbersMask = /** @class */ (function (_super) {
    __extends(OnlyNumbersMask, _super);
    function OnlyNumbersMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnlyNumbersMask.getType = function () {
        return 'only-numbers';
    };
    OnlyNumbersMask.prototype.getValue = function (value) {
        return this.getVMasker().toNumber(value);
    };
    OnlyNumbersMask.prototype.getRawValue = function (maskedValue) {
        return _super.prototype.removeNotNumbers.call(this, maskedValue);
    };
    OnlyNumbersMask.prototype.validate = function () {
        return true;
    };
    return OnlyNumbersMask;
}(BaseMask));
export { OnlyNumbersMask };
//# sourceMappingURL=only-numbers.mask.js.map