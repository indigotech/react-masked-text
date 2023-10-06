import BaseMask from './base.mask';

interface ICreditCardSettings {
  obfuscated?: boolean;
}

const CREDIT_CARD_MASK = '9999 9999 9999 9999';
const CREDIT_CARD_OBFUSCATED_MASK = '9999 **** **** 9999';

const CREDIT_CARD_SETTINGS: ICreditCardSettings = {
  obfuscated: false,
};

export class CreditCardMask extends BaseMask {
  static creditCard() {
    return new CreditCardMask();
  }

  static getType(): string {
    return 'credit-card';
  }

  getValue(value: string, settings?: ICreditCardSettings): string {
    const selectedMask = this._getMask(settings);
    return this.getVMasker().toPattern(value, selectedMask);
  }

  validate(value: string, settings: ICreditCardSettings): boolean {
    if (!!value) {
      const selectedMask = this._getMask(settings);
      return value.length === selectedMask.length;
    }

    return true;
  }

  getRawValue(maskedValue: string): string[] {
    if (!maskedValue) return [];

    return maskedValue.split(' ').map((val: string) => {
      if (!val) return '';

      return val.trim();
    });
  }

  private _getMask(settings: ICreditCardSettings): string {
    const mergedSettings = super.mergeSettings(CREDIT_CARD_SETTINGS, settings);
    const selectedMask = mergedSettings.obfuscated ? CREDIT_CARD_OBFUSCATED_MASK : CREDIT_CARD_MASK;
    return selectedMask;
  }
}

export const creditCardMask = () => new CreditCardMask();
