/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import VMasker from './internal-dependencies/vanilla-masker.js';
var BaseMask = /** @class */ (function () {
    function BaseMask() {
    }
    BaseMask.prototype.getVMasker = function () {
        return VMasker;
    };
    BaseMask.prototype.mergeSettings = function (obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) {
            if (Object.prototype.hasOwnProperty.call(obj1, attrname)) {
                obj3[attrname] = obj1[attrname];
            }
        }
        for (var attrname in obj2) {
            if (Object.prototype.hasOwnProperty.call(obj2, attrname)) {
                obj3[attrname] = obj2[attrname];
            }
        }
        return obj3;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseMask.prototype.getRawValue = function (maskedValue, settings) {
        return maskedValue;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseMask.prototype.getDefaultValue = function (value, settings) {
        if (value === undefined || value === null) {
            return '';
        }
        return String(value);
    };
    BaseMask.prototype.removeNotNumbers = function (text) {
        return text.replace(/[^0-9]+/g, '');
    };
    BaseMask.prototype.removeWhiteSpaces = function (text) {
        return (text || '').replace(/\s/g, '');
    };
    return BaseMask;
}());
export default BaseMask;
//# sourceMappingURL=base.mask.js.map