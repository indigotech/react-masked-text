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
module.exports = VMasker;
//# sourceMappingURL=vanilla-masker.js.map