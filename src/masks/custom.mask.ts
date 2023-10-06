import TinyMask from '../../tiny-mask/tinyMask';

import BaseMask from './base.mask';

interface Settings {
  mask?: string;
  translation?: any;
  getRawValue?: (maskedValue: any, settings: Settings) => any;
  validator?: (value: any, settings: Settings) => boolean;
}

const DEFAULT_TRANSLATION: { [key: string]: (val: string) => string } = {
  '9': function (val: string) {
    return val.replace(/[^0-9]+/g, '');
  },
  A: function (val: string) {
    return val.replace(/[^a-zA-Z]+/g, '');
  },
  S: function (val: string) {
    return val.replace(/[^a-zA-Z0-9]+/g, '');
  },
  '*': function (val: string) {
    return val;
  },
};

export class CustomMask extends BaseMask {
  private _mask: string;
  constructor(customMask: string = '') {
    super();
    this._mask = customMask;
  }

  static getType(): string {
    return 'custom';
  }

  getValue(value: string, settings?: Settings): string {
    if (value === '') {
      return value;
    }
    const translation = this.mergeSettings(DEFAULT_TRANSLATION, settings?.translation);

    const masked = new TinyMask(this._mask, { translation }).mask(value);
    return masked;
  }

  getRawValue(maskedValue: string, settings: Settings): string {
    if (!!settings && settings?.getRawValue) {
      return settings?.getRawValue(maskedValue, settings);
    }

    return maskedValue;
  }

  validate(value: string, settings: Settings): boolean {
    if (!!settings && settings?.validator) {
      return settings?.validator(value, settings);
    }

    return true;
  }
}

export const customMask = (customMask: string) => new CustomMask(customMask);
