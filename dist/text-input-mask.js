(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["My Bundle"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                }
                catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                }
                catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
                if (t[0] & 1)
                    throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
        }), g;
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {
                                value: op[1],
                                done: false
                            };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    //@ts-nocheck
    var VanillaMasker = /** @class */ (function () {
        function VanillaMasker(elements) {
            this.elements = elements;
        }
        VanillaMasker.prototype.unbindElementToMask = function () {
            for (var i = 0, len = this.elements.length; i < len; i++) {
                this.elements[i].lastOutput = '';
                this.elements[i].onkeyup = false;
                this.elements[i].onkeydown = false;
                if (this.elements[i].value.length) {
                    this.elements[i].value = this.elements[i].value.replace(/\D/g, '');
                }
            }
        };
        VanillaMasker.prototype.bindElementToMask = function (maskFunction) {
            var that = this;
            var onType = function (e) {
                var source = e.target || e.srcElement;
                if (isAllowedKeyCode(e.keyCode)) {
                    setTimeout(function () {
                        that.opts.lastOutput = source.lastOutput;
                        source.value = VMasker[maskFunction](source.value, that.opts);
                        source.lastOutput = source.value;
                        if (source.setSelectionRange && that.opts.suffixUnit) {
                            source.setSelectionRange(source.value.length, source.value.length - that.opts.suffixUnit.length);
                        }
                    }, 0);
                }
            };
            for (var i = 0, len = this.elements.length; i < len; i++) {
                this.elements[i].lastOutput = '';
                this.elements[i].onkeyup = onType;
                if (this.elements[i].value.length) {
                    this.elements[i].value = VMasker[maskFunction](this.elements[i].value, this.opts);
                }
            }
        };
        VanillaMasker.prototype.maskMoney = function (opts) {
            this.opts = mergeMoneyOptions(opts);
            this.bindElementToMask('toMoney');
        };
        VanillaMasker.prototype.maskNumber = function () {
            this.opts = {};
            this.bindElementToMask('toNumber');
        };
        VanillaMasker.prototype.maskAlphaNum = function () {
            this.opts = {};
            this.bindElementToMask('toAlphaNumeric');
        };
        VanillaMasker.prototype.maskPattern = function (pattern) {
            this.opts = { pattern: pattern };
            this.bindElementToMask('toPattern');
        };
        VanillaMasker.prototype.unMask = function () {
            this.unbindElementToMask();
        };
        return VanillaMasker;
    }());
    var VMasker = function (el) {
        if (!el) {
            throw new Error('VanillaMasker: There is no element to bind.');
        }
        var elements = 'length' in el ? (el.length ? el : []) : [el];
        return new VanillaMasker(elements);
    };
    VMasker.toMoney = function (value, opts) {
        opts = mergeMoneyOptions(opts);
        if (opts.zeroCents) {
            opts.lastOutput = opts.lastOutput || '';
            var zeroMatcher = '(' + opts.separator + '[0]{0,' + opts.precision + '})';
            var zeroRegExp = new RegExp(zeroMatcher, 'g');
            var digitsLength = value.toString().replace(/[\D]/g, '').length || 0;
            var lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, '').length || 0;
            value = value.toString().replace(zeroRegExp, '');
            if (digitsLength < lastDigitLength) {
                value = value.slice(0, value.length - 1);
            }
        }
        var number = value.toString().replace(/[\D]/g, '');
        var clearDelimiter = new RegExp('^(0|\\' + opts.delimiter + ')');
        var clearSeparator = new RegExp('(\\' + opts.separator + ')$');
        var money = number.substr(0, number.length - opts.moneyPrecision);
        var masked = money.substr(0, money.length % 3);
        var cents = new Array(opts.precision + 1).join('0');
        money = money.substr(money.length % 3, money.length);
        for (var i = 0, len = money.length; i < len; i++) {
            if (i % 3 === 0) {
                masked += opts.delimiter;
            }
            masked += money[i];
        }
        masked = masked.replace(clearDelimiter, '');
        masked = masked.length ? masked : '0';
        if (!opts.zeroCents) {
            var beginCents = number.length - opts.precision;
            var centsValue = number.substr(beginCents, opts.precision);
            var centsLength = centsValue.length;
            var centsSliced = opts.precision > centsLength ? opts.precision : centsLength;
            cents = (cents + centsValue).slice(-centsSliced);
        }
        var unitToApply = opts.unit[opts.unit.length - 1] === ' ' ? opts.unit.substring(0, opts.unit.length - 1) : opts.unit;
        var output = unitToApply + masked + opts.separator + cents + opts.suffixUnit;
        return output.replace(clearSeparator, '');
    };
    VMasker.toPattern = function (value, opts) {
        var pattern = typeof opts === 'object' ? opts.pattern : opts;
        var patternChars = pattern.replace(/\W/g, '');
        var output = pattern.split('');
        var values = value.toString().replace(/\W/g, '');
        var charsValues = values.replace(/\W/g, '');
        var index = 0;
        var i;
        var outputLength = output.length;
        var placeholder = typeof opts === 'object' ? opts.placeholder : undefined;
        for (i = 0; i < outputLength; i++) {
            if (index >= values.length) {
                if (patternChars.length == charsValues.length) {
                    return output.join('');
                }
                else if (placeholder !== undefined && patternChars.length > charsValues.length) {
                    return addPlaceholdersToOutput(output, i, placeholder).join('');
                }
                else {
                    break;
                }
            }
            else {
                if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
                    (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
                    (output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))) {
                    output[i] = values[index++];
                }
                else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
                    if (placeholder !== undefined) {
                        return addPlaceholdersToOutput(output, i, placeholder).join('');
                    }
                    else {
                        return output.slice(0, i).join('');
                    }
                }
            }
        }
        return output.join('').substr(0, i);
    };
    VMasker.toNumber = function (value) {
        return value.toString().replace(/(?!^-)[^0-9]/g, '');
    };
    VMasker.toAlphaNumeric = function (value) {
        return value.toString().replace(/[^a-z0-9 ]+/i, '');
    };
    function isAllowedKeyCode(keyCode) {
        for (var i = 0, len = BY_PASS_KEYS.length; i < len; i++) {
            if (keyCode == BY_PASS_KEYS[i]) {
                return false;
            }
        }
        return true;
    }
    function mergeMoneyOptions(opts) {
        opts = opts || {};
        opts = {
            precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
            separator: opts.separator || ',',
            delimiter: opts.delimiter || '.',
            unit: opts.unit ? opts.unit + ' ' : '',
            suffixUnit: (opts.suffixUnit && ' ' + opts.suffixUnit.replace(/[\s]/g, '')) || '',
            zeroCents: opts.zeroCents,
            lastOutput: opts.lastOutput,
        };
        opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;
        return opts;
    }
    function addPlaceholdersToOutput(output, index, placeholder) {
        for (; index < output.length; index++) {
            if (output[index] === DIGIT || output[index] === ALPHA || output[index] === ALPHANUM) {
                output[index] = placeholder;
            }
        }
        return output;
    }
    var DIGIT = '9';
    var ALPHA = 'A';
    var ALPHANUM = 'S';
    var BY_PASS_KEYS = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93];

    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
        CelPhoneMask.celPhone = function () {
            return new CelPhoneMask();
        };
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
    var celPhoneMask = function () { return new CelPhoneMask(); };

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
        CnpjMask.cnpj = function () {
            return new CnpjMask();
        };
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
    var cnpjMask = function () { return new CnpjMask(); };

    var TinyMask = /** @class */ (function () {
        function TinyMask(pattern, options) {
            var defaultOptions = {
                translation: {
                    '9': function (val) { return val.replace(/[^0-9]+/g, ''); },
                    'A': function (val) { return val.replace(/[^a-zA-Z]+/g, ''); },
                    'S': function (val) { return val.replace(/[^a-zA-Z0-9]+/g, ''); },
                    '*': function (val) { return val; }
                },
                invalidValues: [null, undefined, '']
            };
            var opt = options || {};
            this._options = {
                translation: __assign(__assign({}, defaultOptions.translation), opt.translation),
                invalidValues: __spreadArray(__spreadArray([], defaultOptions.invalidValues, true), opt.invalidValues || [], true),
                pattern: pattern
            };
            this._handlers = [];
            for (var i = 0; i < pattern.length; i++) {
                var element = pattern[i];
                var result = this._options.translation[element] || element;
                this._handlers.push(result);
            }
        }
        TinyMask.prototype._isString = function (value) {
            return typeof value === "string";
        };
        TinyMask.prototype.mask = function (value) {
            var result = '';
            var val = String(value);
            if (val.length === 0)
                return '';
            var maskSize = this._handlers.length;
            var maskResolved = 0;
            val.length;
            var valueResolved = 0;
            while (maskResolved < maskSize) {
                var hand = this._handlers[maskResolved];
                var char = val[valueResolved];
                if (char === undefined) {
                    break;
                }
                if (char === hand) {
                    result += char;
                    maskResolved++;
                    valueResolved++;
                    continue;
                }
                if (this._isString(hand)) {
                    result += hand;
                    maskResolved++;
                    continue;
                }
                var parsed = hand(char);
                if (this._options.invalidValues.indexOf(parsed) < 0) {
                    result += parsed;
                    valueResolved++;
                }
                else {
                    break;
                }
                maskResolved++;
            }
            return result;
        };
        return TinyMask;
    }());

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
        function CustomMask(customMask) {
            if (customMask === void 0) { customMask = ''; }
            var _this = _super.call(this) || this;
            _this._mask = customMask;
            return _this;
        }
        CustomMask.custom = function (customMask) {
            return new CustomMask(customMask);
        };
        CustomMask.getType = function () {
            return 'custom';
        };
        CustomMask.prototype.getValue = function (value, settings) {
            if (value === '') {
                return value;
            }
            var translation = this.mergeSettings(DEFAULT_TRANSLATION, settings === null || settings === void 0 ? void 0 : settings.translation);
            var masked = new TinyMask(this._mask, { translation: translation }).mask(value);
            return masked;
        };
        CustomMask.prototype.getRawValue = function (maskedValue, settings) {
            if (!!settings && (settings === null || settings === void 0 ? void 0 : settings.getRawValue)) {
                return settings === null || settings === void 0 ? void 0 : settings.getRawValue(maskedValue, settings);
            }
            return maskedValue;
        };
        CustomMask.prototype.validate = function (value, settings) {
            if (!!settings && (settings === null || settings === void 0 ? void 0 : settings.validator)) {
                return settings === null || settings === void 0 ? void 0 : settings.validator(value, settings);
            }
            return true;
        };
        return CustomMask;
    }(BaseMask));
    var customMask = function (customMask) { return new CustomMask(customMask); };

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
        CpfMask.cpf = function () {
            return new CpfMask();
        };
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
    var cpfMask = function () { return new CpfMask(); };

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
        CreditCardMask.creditCard = function () {
            return new CreditCardMask();
        };
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
    var creditCardMask = function () { return new CreditCardMask(); };

    var parseStringDate = function (input, format) {
        if (input.length !== format.length) {
            return null;
        }
        var componentsOfFormatFromInput = format
            .split('')
            .reduce(function (acc, curr, index) {
            acc[curr] = "".concat(acc[curr] || '').concat(input[index]);
            return acc;
        }, {});
        var dateComponents = validChars.reduce(function (acc, curr) {
            acc[curr] = strToDateComponent[curr](componentsOfFormatFromInput[curr]);
            return acc;
        }, {});
        if (Object.values(dateComponents).some(function (component) { return component === null; })) {
            return null;
        }
        var year = dateComponents['Y'];
        var monthIndex = dateComponents['M'];
        var day = dateComponents['D'];
        var hours = dateComponents['h'] && dateComponents['a']
            ? dateComponents['h'] + (dateComponents['a'] === AMPM.PM ? 12 : 0)
            : dateComponents['H'];
        var minutes = dateComponents['m'];
        var seconds = dateComponents['s'];
        var date = new Date(year, monthIndex, day, hours, minutes, seconds);
        return date;
    };
    var validChars = ['Y', 'M', 'D', 'H', 'h', 'a', 'm', 's'];
    var AMPM = {
        AM: 0,
        PM: 1,
    };
    var now = new Date();
    var strToDateComponent = {
        Y: function (str) {
            return str ? Number(str) : now.getFullYear();
        },
        M: function (str) {
            var month = str ? Number(str) - 1 : now.getMonth();
            return month >= 0 && month <= 11 ? month : null;
        },
        D: function (str) {
            return str ? Number(str) : now.getDate();
        },
        H: function (str) {
            var hour = str ? Number(str) : now.getHours();
            return hour >= 0 && hour <= 23 ? hour : null;
        },
        h: function (str) {
            var hour = str ? Number(str) : now.getHours() % 12;
            return hour >= 0 && hour <= 12 ? hour : null;
        },
        a: function (str) {
            if (!str)
                return undefined;
            if (str.toLowerCase() === 'am') {
                return AMPM.AM;
            }
            else if (str.toLowerCase() === 'pm') {
                return AMPM.PM;
            }
            else {
                return null;
            }
        },
        m: function (str) {
            var minute = str ? Number(str) : now.getMinutes();
            return minute >= 1 && minute <= 59 ? minute : null;
        },
        s: function (str) {
            var second = str ? Number(str) : now.getSeconds();
            return second >= 1 && second <= 59 ? second : null;
        },
    };

    var DATETIME_MASK_SETTINGS = {
        format: 'DD/MM/YYYY HH:mm:ss',
    };
    var DatetimeMask = /** @class */ (function (_super) {
        __extends(DatetimeMask, _super);
        function DatetimeMask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DatetimeMask.datetime = function () {
            return new DatetimeMask();
        };
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
    var datetimeMask = function () { return new DatetimeMask(); };

    var MONEY_MASK_SETTINGS = {
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: 'R$',
        suffixUnit: '',
        zeroCents: false,
    };
    var MoneyMask = /** @class */ (function (_super) {
        __extends(MoneyMask, _super);
        function MoneyMask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MoneyMask.money = function () {
            return new MoneyMask();
        };
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
    var moneyMask = function () { return new MoneyMask(); };

    var OnlyNumbersMask = /** @class */ (function (_super) {
        __extends(OnlyNumbersMask, _super);
        function OnlyNumbersMask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OnlyNumbersMask.onlyNumbers = function () {
            return new OnlyNumbersMask();
        };
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
    var onlyNumbersMask = function () { return new OnlyNumbersMask(); };

    var ZIP_CODE_MASK = '99999-999';
    var ZipCodeMask = /** @class */ (function (_super) {
        __extends(ZipCodeMask, _super);
        function ZipCodeMask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZipCodeMask.zipCode = function () {
            return new ZipCodeMask();
        };
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
    var zipCodeMask = function () { return new ZipCodeMask(); };

    var BaseTextComponent = function (props, ref) {
        var defaultValue = props.defaultValue, value = props.value, mask = props.mask, type = props.type, onChange = props.onChange, otherProps = __rest(props, ["defaultValue", "value", "mask", "type", "onChange"]);
        var maskHandler = mask; // Adjust the type according to MaskResolver
        var _a = React.useState(""), maskedValue = _a[0], setMaskedValue = _a[1];
        var isControlled = React.useCallback(function () {
            return value !== undefined;
        }, [value]);
        React.useEffect(function () {
            if (defaultValue !== undefined && value !== undefined) {
                throw new Error("Use either the defaultValue prop, or the value prop, but not both");
            }
            var masked = maskHandler === null || maskHandler === void 0 ? void 0 : maskHandler.getValue(defaultValue || "");
            if (isControlled) {
                masked = (maskHandler === null || maskHandler === void 0 ? void 0 : maskHandler.getValue(value || "")) || value;
            }
            setMaskedValue(masked);
        }, [mask, defaultValue, value, isControlled]);
        var handleChangeText = function (text) { return __awaiter(void 0, void 0, void 0, function () {
            var maskedText;
            return __generator(this, function (_a) {
                maskedText = (mask === null || mask === void 0 ? void 0 : mask.getValue(text || "")) || text;
                onChange === null || onChange === void 0 ? void 0 : onChange(maskedText);
                if (!isControlled()) {
                    setMaskedValue(maskedText);
                }
                return [2 /*return*/];
            });
        }); };
        return (React.createElement("input", __assign({ ref: ref, type: type !== null && type !== void 0 ? type : "text" }, otherProps, { value: maskedValue, onChange: function (event) { return handleChangeText(event.currentTarget.value); } })));
    };
    var textInputMask = React.forwardRef(BaseTextComponent);

    exports.BaseMask = BaseMask;
    exports.celPhoneMask = celPhoneMask;
    exports.cnpjMask = cnpjMask;
    exports.cpfMask = cpfMask;
    exports.creditCardMask = creditCardMask;
    exports.customMask = customMask;
    exports.datetimeMask = datetimeMask;
    exports.default = textInputMask;
    exports.moneyMask = moneyMask;
    exports.onlyNumbersMask = onlyNumbersMask;
    exports.zipCodeMask = zipCodeMask;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
