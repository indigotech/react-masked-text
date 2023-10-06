import BaseMask from './base.mask';

const CNPJ_MASK = '99.999.999/9999-99';

const validateCnpj = (cnpj: string): boolean => {
  const valida: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let dig1 = 0;
  let dig2 = 0;
  let i = 0;

  const exp = /\.|\-|\//g;
  cnpj = cnpj.toString().replace(exp, '');
  const digito = Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

  for (i = 0; i < valida.length; i++) {
    dig1 += i > 0 ? Number(cnpj.charAt(i - 1)) * valida[i] : 0;
    dig2 += Number(cnpj.charAt(i)) * valida[i];
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

  return dig1 * 10 + dig2 == digito;
};

export class CnpjMask extends BaseMask {
  static getType(): string {
    return 'cnpj';
  }

  getValue(value: string): string {
    return this.getVMasker().toPattern(value, CNPJ_MASK);
  }

  getRawValue(maskedValue: string): string {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value: string): boolean {
    return validateCnpj(value);
  }
}

export const cnpjMask = () => new CnpjMask();