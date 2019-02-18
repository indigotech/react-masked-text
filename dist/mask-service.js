(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MaskService = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  // import * as VanillaMasker from '../internal-dependencies/vanilla-masker';
  var VMasker = require('./internal-dependencies/vanilla-masker.js');

  var BaseMask =
  /*#__PURE__*/
  function () {
    function BaseMask() {
      _classCallCheck(this, BaseMask);
    }

    _createClass(BaseMask, [{
      key: "getVMasker",
      value: function getVMasker() {
        return VMasker;
      }
    }, {
      key: "mergeSettings",
      value: function mergeSettings(obj1, obj2) {
        var obj3 = {};

        for (var attrname in obj1) {
          obj3[attrname] = obj1[attrname];
        }

        for (var attrname in obj2) {
          obj3[attrname] = obj2[attrname];
        }

        return obj3;
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        return maskedValue;
      }
    }, {
      key: "getDefaultValue",
      value: function getDefaultValue(value) {
        if (value === undefined || value === null) {
          return '';
        }

        return value;
      }
    }, {
      key: "removeNotNumbers",
      value: function removeNotNumbers(text) {
        return text.replace(/[^0-9]+/g, '');
      }
    }, {
      key: "removeWhiteSpaces",
      value: function removeWhiteSpaces(text) {
        return (text || '').replace(/\s/g, '');
      }
    }]);

    return BaseMask;
  }();

  var PHONE_8_MASK = '9999-9999';
  var PHONE_9_MASK = '99999-9999';
  var CEL_PHONE_SETTINGS = {
    withDDD: true,
    dddMask: '(99) '
  };
  var CelPhoneMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(CelPhoneMask, _BaseMask);

    function CelPhoneMask() {
      _classCallCheck(this, CelPhoneMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(CelPhoneMask).apply(this, arguments));
    }

    _createClass(CelPhoneMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        var mask = this._getMask(value, settings);

        return this.getVMasker().toPattern(value, mask);
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        return _get(_getPrototypeOf(CelPhoneMask.prototype), "removeNotNumbers", this).call(this, maskedValue);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        var valueToValidate = _get(_getPrototypeOf(CelPhoneMask.prototype), "getDefaultValue", this).call(this, value);

        valueToValidate = this.getValue(value, settings);

        var mask = this._getMask(value, settings);

        return valueToValidate.length === mask.length;
      }
    }, {
      key: "_getMask",
      value: function _getMask(value, settings) {
        var _this = this;

        var mergedSettings = _get(_getPrototypeOf(CelPhoneMask.prototype), "mergeSettings", this).call(this, CEL_PHONE_SETTINGS, settings);

        var numbers = _get(_getPrototypeOf(CelPhoneMask.prototype), "removeNotNumbers", this).call(this, value);

        var mask = PHONE_8_MASK;

        var use9DigitMask = function () {
          if (mergedSettings.withDDD) {
            var numbersDDD = _get(_getPrototypeOf(CelPhoneMask.prototype), "removeNotNumbers", _this).call(_this, mergedSettings.dddMask);

            var remainingValueNumbers = numbers.substr(numbersDDD.length);
            return remainingValueNumbers.length >= 9;
          } else {
            return numbers.length >= 9;
          }
        }();

        if (use9DigitMask) {
          mask = PHONE_9_MASK;
        }

        if (mergedSettings.withDDD) {
          mask = "".concat(mergedSettings.dddMask).concat(mask);
        }

        return mask;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'cel-phone';
      }
    }]);

    return CelPhoneMask;
  }(BaseMask);

  var CPF_MASK = '999.999.999-99';

  var validateCPF = function validateCPF(cpf) {
    if (cpf == "") {
      return true;
    }

    cpf = cpf.replace(/\./gi, "").replace(/-/gi, "");
    var isValid = true;
    var sum;
    var rest;
    var i;
    i = 0;
    sum = 0;

    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
      isValid = false;
    }

    for (i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    rest = sum * 10 % 11;

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

    rest = sum * 10 % 11;

    if (rest == 10 || rest == 11) {
      rest = 0;
    }

    if (rest != parseInt(cpf.substring(10, 11))) {
      isValid = false;
    }

    return isValid;
  };

  var CpfMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(CpfMask, _BaseMask);

    function CpfMask() {
      _classCallCheck(this, CpfMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(CpfMask).apply(this, arguments));
    }

    _createClass(CpfMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        return this.getVMasker().toPattern(value, CPF_MASK);
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        return _get(_getPrototypeOf(CpfMask.prototype), "removeNotNumbers", this).call(this, maskedValue);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        return validateCPF(value);
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'cpf';
      }
    }]);

    return CpfMask;
  }(BaseMask);

  var CREDIT_CARD_MASK = '9999 9999 9999 9999';
  var CREDIT_CARD_OBFUSCATED_MASK = '9999 **** **** 9999';
  var CREDIT_CARD_SETTINGS = {
    obfuscated: false
  };
  var CreditCardMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(CreditCardMask, _BaseMask);

    function CreditCardMask() {
      _classCallCheck(this, CreditCardMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(CreditCardMask).apply(this, arguments));
    }

    _createClass(CreditCardMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        var selectedMask = this._getMask(settings);

        return this.getVMasker().toPattern(value, selectedMask);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        if (!!value) {
          var selectedMask = this._getMask(settings);

          return value.length === selectedMask.length;
        }

        return true;
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        if (!maskedValue) return [];
        return maskedValue.split(' ').map(function (val) {
          if (!val) return '';
          return val.trim();
        });
      }
    }, {
      key: "_getMask",
      value: function _getMask(settings) {
        var mergedSettings = _get(_getPrototypeOf(CreditCardMask.prototype), "mergeSettings", this).call(this, CREDIT_CARD_SETTINGS, settings);

        var selectedMask = mergedSettings.obfuscated ? CREDIT_CARD_OBFUSCATED_MASK : CREDIT_CARD_MASK;
        return selectedMask;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'credit-card';
      }
    }]);

    return CreditCardMask;
  }(BaseMask);

  var TinyMask = require('tinymask');
  var DEFAULT_TRANSLATION = {
    '9': function _(val) {
      return val.replace(/[^0-9]+/g, '');
    },
    'A': function A(val) {
      return val.replace(/[^a-zA-Z]+/g, '');
    },
    'S': function S(val) {
      return val.replace(/[^a-zA-Z0-9]+/g, '');
    },
    '*': function _(val) {
      return val;
    }
  };
  var CustomMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(CustomMask, _BaseMask);

    function CustomMask() {
      _classCallCheck(this, CustomMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomMask).apply(this, arguments));
    }

    _createClass(CustomMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        if (value === '') {
          return value;
        }

        var mask = settings.mask;
        var translation = this.mergeSettings(DEFAULT_TRANSLATION, settings.translation);
        var masked = new TinyMask(mask, {
          translation: translation
        }).mask(value);
        return masked;
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        if (!!settings && settings.getRawValue) {
          return settings.getRawValue(maskedValue, settings);
        }

        return maskedValue;
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        if (!!settings && settings.validator) {
          return settings.validator(value, settings);
        }

        return true;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'custom';
      }
    }]);

    return CustomMask;
  }(BaseMask);

  var _require = require('./internal-dependencies/date-parser.js'),
      parseStringDate = _require.parseStringDate;

  var DATETIME_MASK_SETTINGS = {
    format: 'DD/MM/YYYY HH:mm:ss'
  };
  var DatetimeMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(DatetimeMask, _BaseMask);

    function DatetimeMask() {
      _classCallCheck(this, DatetimeMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(DatetimeMask).apply(this, arguments));
    }

    _createClass(DatetimeMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        var mergedSettings = this._getMergedSettings(settings);

        var mask = '';

        for (var i = 0; i < mergedSettings.format.length; i++) {
          mask += mergedSettings.format[i].replace(/[a-zA-Z]+/g, '9');
        }

        return this.getVMasker().toPattern(value, mask);
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        var mergedSettings = this._getMergedSettings(settings);

        return parseStringDate(maskedValue, mergedSettings.format);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        var maskedValue = this.getValue(value, settings);

        var mergedSettings = this._getMergedSettings(settings);

        var date = parseStringDate(maskedValue, mergedSettings.format);

        var isValid = this._isValidDate(date);

        return isValid;
      }
    }, {
      key: "_getMergedSettings",
      value: function _getMergedSettings(settings) {
        return _get(_getPrototypeOf(DatetimeMask.prototype), "mergeSettings", this).call(this, DATETIME_MASK_SETTINGS, settings);
      }
      /** https://stackoverflow.com/a/1353711/3670829 */

    }, {
      key: "_isValidDate",
      value: function _isValidDate(d) {
        return d instanceof Date && !isNaN(d);
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'datetime';
      }
    }]);

    return DatetimeMask;
  }(BaseMask);

  var MONEY_MASK_SETTINGS = {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$',
    suffixUnit: '',
    zeroCents: false
  };
  var MoneyMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(MoneyMask, _BaseMask);

    function MoneyMask() {
      _classCallCheck(this, MoneyMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(MoneyMask).apply(this, arguments));
    }

    _createClass(MoneyMask, [{
      key: "getValue",
      value: function getValue(value, settings, oldValue) {
        var mergedSettings = _get(_getPrototypeOf(MoneyMask.prototype), "mergeSettings", this).call(this, MONEY_MASK_SETTINGS, settings);

        if (mergedSettings.suffixUnit && oldValue && value) {
          // value: 123 R
          // oldValue: 123 R$
          if (value.length == oldValue.length - 1) {
            var cleared = this.removeNotNumbers(value);
            value = cleared.substr(0, cleared.length - 1);
          }
        }

        var masked = this.getVMasker().toMoney(value, mergedSettings);
        return masked;
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        var mergedSettings = _get(_getPrototypeOf(MoneyMask.prototype), "mergeSettings", this).call(this, MONEY_MASK_SETTINGS, settings);

        var normalized = _get(_getPrototypeOf(MoneyMask.prototype), "removeNotNumbers", this).call(this, maskedValue);

        var dotPosition = normalized.length - mergedSettings.precision;
        normalized = this._insert(normalized, dotPosition, '.');
        return Number(normalized);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        return true;
      }
    }, {
      key: "_insert",
      value: function _insert(text, index, string) {
        if (index > 0) {
          return text.substring(0, index) + string + text.substring(index, text.length);
        } else {
          return string + text;
        }
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'money';
      }
    }]);

    return MoneyMask;
  }(BaseMask);

  var OnlyNumbersMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(OnlyNumbersMask, _BaseMask);

    function OnlyNumbersMask() {
      _classCallCheck(this, OnlyNumbersMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(OnlyNumbersMask).apply(this, arguments));
    }

    _createClass(OnlyNumbersMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        return this.getVMasker().toNumber(value);
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        return _get(_getPrototypeOf(OnlyNumbersMask.prototype), "removeNotNumbers", this).call(this, maskedValue);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        return true;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'only-numbers';
      }
    }]);

    return OnlyNumbersMask;
  }(BaseMask);

  var ZIP_CODE_MASK = '99999-999';
  var ZipCodeMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(ZipCodeMask, _BaseMask);

    function ZipCodeMask() {
      _classCallCheck(this, ZipCodeMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(ZipCodeMask).apply(this, arguments));
    }

    _createClass(ZipCodeMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        return this.getVMasker().toPattern(value, ZIP_CODE_MASK);
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        return _get(_getPrototypeOf(ZipCodeMask.prototype), "removeNotNumbers", this).call(this, maskedValue);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        if (!!value) {
          return value.length === ZIP_CODE_MASK.length;
        }

        return true;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'zip-code';
      }
    }]);

    return ZipCodeMask;
  }(BaseMask);

  var CNPJ_MASK = '99.999.999/9999-99';

  var validateCnpj = function validateCnpj(cnpj) {
    var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
    var dig1 = new Number();
    var dig2 = new Number();
    var i = 0;
    var exp = /\.|\-|\//g;
    cnpj = cnpj.toString().replace(exp, "");
    var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

    for (i = 0; i < valida.length; i++) {
      dig1 += i > 0 ? cnpj.charAt(i - 1) * valida[i] : 0;
      dig2 += cnpj.charAt(i) * valida[i];
    }

    dig1 = dig1 % 11 < 2 ? 0 : 11 - dig1 % 11;
    dig2 = dig2 % 11 < 2 ? 0 : 11 - dig2 % 11;
    return dig1 * 10 + dig2 == digito;
  };

  var CnpjMask =
  /*#__PURE__*/
  function (_BaseMask) {
    _inherits(CnpjMask, _BaseMask);

    function CnpjMask() {
      _classCallCheck(this, CnpjMask);

      return _possibleConstructorReturn(this, _getPrototypeOf(CnpjMask).apply(this, arguments));
    }

    _createClass(CnpjMask, [{
      key: "getValue",
      value: function getValue(value, settings) {
        return this.getVMasker().toPattern(value, CNPJ_MASK);
      }
    }, {
      key: "getRawValue",
      value: function getRawValue(maskedValue, settings) {
        return _get(_getPrototypeOf(CnpjMask.prototype), "removeNotNumbers", this).call(this, maskedValue);
      }
    }, {
      key: "validate",
      value: function validate(value, settings) {
        return validateCnpj(value);
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'cnpj';
      }
    }]);

    return CnpjMask;
  }(BaseMask);



  var Masks = /*#__PURE__*/Object.freeze({
    CelPhoneMask: CelPhoneMask,
    CpfMask: CpfMask,
    CreditCardMask: CreditCardMask,
    CustomMask: CustomMask,
    DatetimeMask: DatetimeMask,
    MoneyMask: MoneyMask,
    OnlyNumbersMask: OnlyNumbersMask,
    ZipCodeMask: ZipCodeMask,
    CnpjMask: CnpjMask
  });

  var maskKeys = Object.keys(Masks);

  var MaskResolver =
  /*#__PURE__*/
  function () {
    function MaskResolver() {
      _classCallCheck(this, MaskResolver);
    }

    _createClass(MaskResolver, null, [{
      key: "resolve",
      value: function resolve(kind) {
        var maskKey = maskKeys.filter(function (m) {
          var handler = Masks[m];
          return handler && handler.getType && handler.getType() === kind;
        })[0];
        var handler = Masks[maskKey];

        if (!handler) {
          throw new Error('Mask type not supported.');
        }

        return new handler();
      }
    }]);

    return MaskResolver;
  }();

  var MaskService =
  /*#__PURE__*/
  function () {
    function MaskService() {
      _classCallCheck(this, MaskService);
    }

    _createClass(MaskService, null, [{
      key: "toMask",
      value: function toMask(type, value, settings) {
        return MaskResolver.resolve(type).getValue(value, settings);
      }
    }, {
      key: "isValid",
      value: function isValid(type, value, settings) {
        return MaskResolver.resolve(type).validate(value, settings);
      }
    }]);

    return MaskService;
  }();

  return MaskService;

})));
