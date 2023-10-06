import BaseMask from './base.mask';

const ZIP_CODE_MASK = '99999-999';

export class ZipCodeMask extends BaseMask {
  static getType(): string {
    return 'zip-code';
  }

  getValue(value: string): string {
    return this.getVMasker().toPattern(value, ZIP_CODE_MASK);
  }

  getRawValue(maskedValue: string): string {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value: string): boolean {
    if (!!value) {
      return value.length === ZIP_CODE_MASK.length;
    }

    return true;
  }
}

export const zipCodeMask = () => new ZipCodeMask();
