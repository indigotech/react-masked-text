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
var ZIP_CODE_MASK = '99999-999';
var ZipCodeMask = /** @class */ (function (_super) {
    __extends(ZipCodeMask, _super);
    function ZipCodeMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZipCodeMask.getType = function () {
        return 'zip-code';
    };
    ZipCodeMask.prototype.getValue = function (value) {
        return this.getVMasker().toPattern(value, ZIP_CODE_MASK);
    };
    ZipCodeMask.prototype.getRawValue = function (maskedValue) {
        return _super.prototype.removeNotNumbers.call(this, maskedValue);
    };
    ZipCodeMask.prototype.validate = function (value) {
        if (!!value) {
            return value.length === ZIP_CODE_MASK.length;
        }
        return true;
    };
    return ZipCodeMask;
}(BaseMask));
export { ZipCodeMask };
//# sourceMappingURL=zip-code.mask.js.map