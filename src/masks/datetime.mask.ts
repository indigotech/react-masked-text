// TypeScript
import BaseMask from './base.mask';
import { parseStringDate } from './internal-dependencies/date-parser';

interface Settings {
  format: string;
}

const DATETIME_MASK_SETTINGS: Settings = {
  format: 'DD/MM/YYYY HH:mm:ss',
};

export class DatetimeMask extends BaseMask {
  static getType(): string {
    return 'datetime';
  }

  getValue(value: string, settings?: Settings): string {
    const mergedSettings = this._getMergedSettings(settings);
    let mask = '';

    for (let i = 0; i < mergedSettings.format.length; i++) {
      mask += mergedSettings.format[i].replace(/[a-zA-Z]+/g, '9');
    }

    return this.getVMasker().toPattern(value, mask);
  }

  getRawValue<Date>(maskedValue: string, settings: Settings): Date {
    const mergedSettings = this._getMergedSettings(settings);
    return parseStringDate(maskedValue, mergedSettings.format) as unknown as Date;
  }

  validate(value: string, settings: Settings): boolean {
    const maskedValue = this.getValue(value, settings);
    const mergedSettings = this._getMergedSettings(settings);
    const date = parseStringDate(maskedValue, mergedSettings.format);
    const isValid = this._isValidDate(date);
    return isValid;
  }

  _getMergedSettings(settings: Settings): Settings {
    return super.mergeSettings(DATETIME_MASK_SETTINGS, settings);
  }

  /** https://stackoverflow.com/a/1353711/3670829 */
  _isValidDate(d: Date): boolean {
    return d instanceof Date && !isNaN(d.getTime());
  }
}

export const datetimeMask = () => new DatetimeMask();
