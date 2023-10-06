import BaseMask from './base.mask';

interface MoneyMaskSettings {
  precision: number;
  separator: string;
  delimiter: string;
  unit: string;
  suffixUnit: string;
  zeroCents: boolean;
}

const MONEY_MASK_SETTINGS: MoneyMaskSettings = {
  precision: 2,
  separator: ',',
  delimiter: '.',
  unit: 'R$',
  suffixUnit: '',
  zeroCents: false,
};

export class MoneyMask extends BaseMask {
  static getType(): string {
    return 'money';
  }

  getValue(value: string, settings?: Partial<MoneyMaskSettings>, oldValue?: string): string {
    const mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings) as MoneyMaskSettings;

    if (mergedSettings.suffixUnit && oldValue && value) {
      if (value.length === oldValue.length - 1) {
        const cleared = this.removeNotNumbers(value);
        value = cleared.substring(0, cleared.length - 1);
      }
    }

    const masked = this.getVMasker().toMoney(value, mergedSettings);
    return masked;
  }

  getRawValue(maskedValue: string, settings?: Partial<MoneyMaskSettings>): number {
    const mergedSettings = super.mergeSettings(MONEY_MASK_SETTINGS, settings) as MoneyMaskSettings;
    let normalized = super.removeNotNumbers(maskedValue);

    const dotPosition = normalized.length - mergedSettings.precision;
    normalized = this._insert(normalized, dotPosition, '.');

    return Number(normalized);
  }

  validate(): boolean {
    return true;
  }

  private _insert(text: string, index: number, stringToInsert: string): string {
    if (index > 0) {
      return text.substring(0, index) + stringToInsert + text.substring(index, text.length);
    } else {
      return stringToInsert + text;
    }
  }
}

export const moneyMask = () => new MoneyMask();
