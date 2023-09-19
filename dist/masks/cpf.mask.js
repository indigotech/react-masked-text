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
var CPF_MASK = '999.999.999-99';
var validateCPF = function (cpf) {
    if (cpf == '') {
        return true;
    }
    cpf = cpf.replace(/\./gi, '').replace(/-/gi, '');
    var isValid = true;
    var sum;
    var rest;
    var i;
    i = 0;
    sum = 0;
    if (cpf.length != 11 ||
        cpf == '00000000000' ||
        cpf == '11111111111' ||
        cpf == '22222222222' ||
        cpf == '33333333333' ||
        cpf == '44444444444' ||
        cpf == '55555555555' ||
        cpf == '66666666666' ||
        cpf == '77777777777' ||
        cpf == '88888888888' ||
        cpf == '99999999999') {
        isValid = false;
    }
    for (i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) {
        rest = 0;
    }
    if (rest != parseInt(cpf.substring(9, 10))) {
        isValid = false;
    }
    sum = 0;
    for (i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) {
        rest = 0;
    }
    if (rest != parseInt(cpf.substring(10, 11))) {
        isValid = false;
    }
    return isValid;
};
var CpfMask = /** @class */ (function (_super) {
    __extends(CpfMask, _super);
    function CpfMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CpfMask.getType = function () {
        return 'cpf';
    };
    CpfMask.prototype.getValue = function (value) {
        return this.getVMasker().toPattern(value, CPF_MASK);
    };
    CpfMask.prototype.getRawValue = function (maskedValue) {
        return _super.prototype.removeNotNumbers.call(this, maskedValue);
    };
    CpfMask.prototype.validate = function (value) {
        return validateCPF(value);
    };
    return CpfMask;
}(BaseMask));
export { CpfMask };
//# sourceMappingURL=cpf.mask.js.map