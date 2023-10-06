import BaseMask from './base.mask';

const PHONE_8_MASK = '9999-9999';
const PHONE_9_MASK = '99999-9999';

interface CellPhoneSettings {
  withDDD?: boolean;
  dddMask?: string;
}

const CEL_PHONE_SETTINGS: CellPhoneSettings = {
  withDDD: true,
  dddMask: '(99) ',
};

export class CelPhoneMask extends BaseMask {
  static celPhone() {
    return new CelPhoneMask();
  }

  static getType(): string {
    return 'cel-phone';
  }

  getValue(value: string, settings?: CellPhoneSettings): string {
    const mask: string = this._getMask(value, settings);
    return this.getVMasker().toPattern(value, mask);
  }

  getRawValue(maskedValue: string): string {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value: string, settings?: CellPhoneSettings): boolean {
    let valueToValidate: string = super.getDefaultValue(value);
    valueToValidate = this.getValue(value, settings);

    const mask: string = this._getMask(value, settings);

    return valueToValidate.length === mask.length;
  }

  _getMask(value: string, settings: CellPhoneSettings): string {
    const mergedSettings: any = super.mergeSettings(CEL_PHONE_SETTINGS, settings);

    const numbers: string = super.removeNotNumbers(value);
    let mask: string = PHONE_8_MASK;

    const use9DigitMask: boolean = (() => {
      if (mergedSettings.withDDD) {
        const numbersDDD: string = super.removeNotNumbers(mergedSettings.dddMask);
        const remainingValueNumbers: string = numbers.substring(numbersDDD.length);
        return remainingValueNumbers.length >= 9;
      } else {
        return numbers.length >= 9;
      }
    })();

    if (use9DigitMask) {
      mask = PHONE_9_MASK;
    }

    if (mergedSettings.withDDD) {
      mask = `${mergedSettings.dddMask}${mask}`;
    }

    return mask;
  }
}

export const celPhoneMask = () => new CelPhoneMask();