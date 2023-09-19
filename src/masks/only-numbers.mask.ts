import BaseMask from './base.mask';

export class OnlyNumbersMask extends BaseMask {
  static getType(): string {
    return 'only-numbers';
  }

  getValue(value: string): string {
    return this.getVMasker().toNumber(value);
  }

  getRawValue(maskedValue: string): string {
    return super.removeNotNumbers(maskedValue);
  }

  validate(): boolean {
    return true;
  }
}
