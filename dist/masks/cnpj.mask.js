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
var CNPJ_MASK = '99.999.999/9999-99';
var validateCnpj = function (cnpj) {
    var valida = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    var dig1 = 0;
    var dig2 = 0;
    var i = 0;
    var exp = /\.|\-|\//g;
    cnpj = cnpj.toString().replace(exp, '');
    var digito = Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));
    for (i = 0; i < valida.length; i++) {
        dig1 += i > 0 ? Number(cnpj.charAt(i - 1)) * valida[i] : 0;
        dig2 += Number(cnpj.charAt(i)) * valida[i];
    }
    dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
    dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);
    return dig1 * 10 + dig2 == digito;
};
var CnpjMask = /** @class */ (function (_super) {
    __extends(CnpjMask, _super);
    function CnpjMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CnpjMask.getType = function () {
        return 'cnpj';
    };
    CnpjMask.prototype.getValue = function (value) {
        return this.getVMasker().toPattern(value, CNPJ_MASK);
    };
    CnpjMask.prototype.getRawValue = function (maskedValue) {
        return _super.prototype.removeNotNumbers.call(this, maskedValue);
    };
    CnpjMask.prototype.validate = function (value) {
        return validateCnpj(value);
    };
    return CnpjMask;
}(BaseMask));
export { CnpjMask };
//# sourceMappingURL=cnpj.mask.js.map