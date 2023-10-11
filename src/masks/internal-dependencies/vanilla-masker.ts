//@ts-nocheck
class VanillaMasker {
  constructor(elements) {
    this.elements = elements;
  }

  unbindElementToMask() {
    for (let i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = '';
      this.elements[i].onkeyup = false;
      this.elements[i].onkeydown = false;

      if (this.elements[i].value.length) {
        this.elements[i].value = this.elements[i].value.replace(/\D/g, '');
      }
    }
  }

  bindElementToMask(maskFunction) {
    const that = this;
    const onType = function (e) {
      const source = e.target || e.srcElement;

      if (isAllowedKeyCode(e.keyCode)) {
        setTimeout(function () {
          that.opts.lastOutput = source.lastOutput;
          source.value = VMasker[maskFunction](source.value, that.opts);
          source.lastOutput = source.value;
          if (source.setSelectionRange && that.opts.suffixUnit) {
            source.setSelectionRange(
              source.value.length,
              source.value.length - that.opts.suffixUnit.length
            );
          }
        }, 0);
      }
    };
    for (let i = 0, len = this.elements.length; i < len; i++) {
      this.elements[i].lastOutput = '';
      this.elements[i].onkeyup = onType;
      if (this.elements[i].value.length) {
        this.elements[i].value = VMasker[maskFunction](this.elements[i].value, this.opts);
      }
    }
  }

  maskMoney(opts) {
    this.opts = mergeMoneyOptions(opts);
    this.bindElementToMask('toMoney');
  }

  maskNumber() {
    this.opts = {};
    this.bindElementToMask('toNumber');
  }

  maskAlphaNum() {
    this.opts = {};
    this.bindElementToMask('toAlphaNumeric');
  }

  maskPattern(pattern) {
    this.opts = { pattern: pattern };
    this.bindElementToMask('toPattern');
  }

  unMask() {
    this.unbindElementToMask();
  }
}

const VMasker = function (el) {
  if (!el) {
    throw new Error('VanillaMasker: There is no element to bind.');
  }
  const elements = 'length' in el ? (el.length ? el : []) : [el];
  return new VanillaMasker(elements);
};

VMasker.toMoney = function (value, opts) {
  opts = mergeMoneyOptions(opts);
  if (opts.zeroCents) {
    opts.lastOutput = opts.lastOutput || '';
    const zeroMatcher = '(' + opts.separator + '[0]{0,' + opts.precision + '})';
    const zeroRegExp = new RegExp(zeroMatcher, 'g');
    const digitsLength = value.toString().replace(/[\D]/g, '').length || 0;
    const lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, '').length || 0;
    value = value.toString().replace(zeroRegExp, '');
    if (digitsLength < lastDigitLength) {
      value = value.slice(0, value.length - 1);
    }
  }
  const number = value.toString().replace(/[\D]/g, '');
  const clearDelimiter = new RegExp('^(0|\\' + opts.delimiter + ')');
  const clearSeparator = new RegExp('(\\' + opts.separator + ')$');
  let money = number.substr(0, number.length - opts.moneyPrecision);
  let masked = money.substr(0, money.length % 3);
  let cents = new Array(opts.precision + 1).join('0');
  money = money.substr(money.length % 3, money.length);
  for (let i = 0, len = money.length; i < len; i++) {
    if (i % 3 === 0) {
      masked += opts.delimiter;
    }
    masked += money[i];
  }
  masked = masked.replace(clearDelimiter, '');
  masked = masked.length ? masked : '0';
  if (!opts.zeroCents) {
    const beginCents = number.length - opts.precision;
    const centsValue = number.substr(beginCents, opts.precision);
    const centsLength = centsValue.length;
    const centsSliced = opts.precision > centsLength ? opts.precision : centsLength;
    cents = (cents + centsValue).slice(-centsSliced);
  }

  const unitToApply =
    opts.unit[opts.unit.length - 1] === ' ' ? opts.unit.substring(0, opts.unit.length - 1) : opts.unit;
  const output = unitToApply + masked + opts.separator + cents + opts.suffixUnit;
  return output.replace(clearSeparator, '');
};

VMasker.toPattern = function (value, opts) {
  const pattern = typeof opts === 'object' ? opts.pattern : opts;
  const patternChars = pattern.replace(/\W/g, '');
  const output = pattern.split('');
  const values = value.toString().replace(/\W/g, '');
  const charsValues = values.replace(/\W/g, '');
  let index = 0;
  let i;
  const outputLength = output.length;
  const placeholder = typeof opts === 'object' ? opts.placeholder : undefined;
  for (i = 0; i < outputLength; i++) {
    if (index >= values.length) {
      if (patternChars.length == charsValues.length) {
        return output.join('');
      } else if (placeholder !== undefined && patternChars.length > charsValues.length) {
        return addPlaceholdersToOutput(output, i, placeholder).join('');
      } else {
        break;
      }
    } else {
      if (
        (output[i] === DIGIT && values[index].match(/[0-9]/)) ||
        (output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
        (output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))
      ) {
        output[i] = values[index++];
      } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
        if (placeholder !== undefined) {
          return addPlaceholdersToOutput(output, i, placeholder).join('');
        } else {
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
  for (let i = 0, len = BY_PASS_KEYS.length; i < len; i++) {
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

const DIGIT = '9';
const ALPHA = 'A';
const ALPHANUM = 'S';
const BY_PASS_KEYS = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93];

export default VMasker;
