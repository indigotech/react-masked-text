type TranslationOptions = {
  [key: string]: (val: string) => string;
};

interface TinyMaskOptions {
  translation?: TranslationOptions;
  invalidValues?: any[];
}

class TinyMask {
  private _options: {
    translation: TranslationOptions;
    invalidValues: any[];
    pattern: string;
  };
  private _handlers: (string | ((val: string) => string))[];

  constructor(pattern: string, options?: TinyMaskOptions) {
    const defaultOptions = {
      translation: {
        '9': (val: string) => val.replace(/[^0-9]+/g, ''),
        'A': (val: string) => val.replace(/[^a-zA-Z]+/g, ''),
        'S': (val: string) => val.replace(/[^a-zA-Z0-9]+/g, ''),
        '*': (val: string) => val
      },
      invalidValues: [null, undefined, '']
    };

    const opt = options || {};
    this._options = {
      translation: { ...defaultOptions.translation, ...opt.translation },
      invalidValues: [...defaultOptions.invalidValues, ...opt.invalidValues || []],
      pattern: pattern
    };

    this._handlers = [];

    for (let i = 0; i < pattern.length; i++) {
      const element = pattern[i];
      const result = this._options.translation[element] || element;
      this._handlers.push(result);
    }
  }

  private _isString(value: any): value is string {
    return typeof value === "string";
  }

  public mask(value: any): string {
    let result = '';
    const val = String(value);


    if (val.length === 0) return '';

    let maskSize = this._handlers.length;
    let maskResolved = 0;

    let valueSize = val.length;
    let valueResolved = 0;

    while (maskResolved < maskSize) {
      const hand = this._handlers[maskResolved];
      const char = val[valueResolved];

      if (char === undefined) {
        break;
      }

      if (char === hand) {
        result += char;
        maskResolved++;
        valueResolved++
        continue;
      }

      if (this._isString(hand)) {
        result += hand;
        maskResolved++;
        continue;
      }

      const parsed = hand(char);


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
  }
}

export default TinyMask;