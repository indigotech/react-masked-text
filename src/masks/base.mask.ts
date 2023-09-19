/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import VMasker from './internal-dependencies/vanilla-masker.js';

export default class BaseMask {
  getVMasker(): typeof VMasker {
    return VMasker;
  }

  mergeSettings<P = Record<string, any>>(obj1: P, obj2: P): P {
    const obj3: Record<string, any> = {};
    for (const attrname in obj1) {
      if (Object.prototype.hasOwnProperty.call(obj1, attrname)) {
        obj3[attrname] = obj1[attrname];
      }
    }
    for (const attrname in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, attrname)) {
        obj3[attrname] = obj2[attrname];
      }
    }
    return obj3 as P;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getRawValue(maskedValue: string, settings?: any): any {
    return maskedValue;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDefaultValue(value: any, settings?: any): string {
    if (value === undefined || value === null) {
      return '';
    }

    return String(value);
  }

  removeNotNumbers(text: string): string {
    return text.replace(/[^0-9]+/g, '');
  }

  removeWhiteSpaces(text: string): string {
    return (text || '').replace(/\s/g, '');
  }
}
