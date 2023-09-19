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
import { TinyMask } from 'tinymask';
import BaseMask from './base.mask';
var DEFAULT_TRANSLATION = {
    '9': function (val) {
        return val.replace(/[^0-9]+/g, '');
    },
    A: function (val) {
        return val.replace(/[^a-zA-Z]+/g, '');
    },
    S: function (val) {
        return val.replace(/[^a-zA-Z0-9]+/g, '');
    },
    '*': function (val) {
        return val;
    },
};
var CustomMask = /** @class */ (function (_super) {
    __extends(CustomMask, _super);
    function CustomMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomMask.getType = function () {
        return 'custom';
    };
    CustomMask.prototype.getValue = function (value, settings) {
        if (value === '') {
            return value;
        }
        var mask = settings.mask;
        var translation = this.mergeSettings(DEFAULT_TRANSLATION, settings.translation);
        var masked = new TinyMask(mask, { translation: translation }).mask(value);
        return masked;
    };
    CustomMask.prototype.getRawValue = function (maskedValue, settings) {
        if (!!settings && settings.getRawValue) {
            return settings.getRawValue(maskedValue, settings);
        }
        return maskedValue;
    };
    CustomMask.prototype.validate = function (value, settings) {
        if (!!settings && settings.validator) {
            return settings.validator(value, settings);
        }
        return true;
    };
    return CustomMask;
}(BaseMask));
export { CustomMask };
//# sourceMappingURL=custom.mask.js.map