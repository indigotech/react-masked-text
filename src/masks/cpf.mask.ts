import BaseMask from './base.mask';

const CPF_MASK = '999.999.999-99';

const validateCPF = (cpf: string): boolean => {
  if (cpf == '') {
    return true;
  }

  cpf = cpf.replace(/\./gi, '').replace(/-/gi, '');
  let isValid = true;
  let sum: number;
  let rest: number;
  let i: number;
  i = 0;
  sum = 0;

  if (
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  ) {
    isValid = false;
  }

  for (i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) {
    rest = 0;
  }

  if (rest != parseInt(cpf.substring(9, 10))) {
    isValid = false;
  }

  sum = 0;

  for (i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) {
    rest = 0;
  }
  if (rest != parseInt(cpf.substring(10, 11))) {
    isValid = false;
  }

  return isValid;
};

class CpfMask extends BaseMask {
  static getType(): string {
    return 'cpf';
  }

  getValue(value: string): string {
    return this.getVMasker().toPattern(value, CPF_MASK);
  }

  getRawValue(maskedValue: string): string {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value: string): boolean {
    return validateCPF(value);
  }
}

export const cpfMask = () => new CpfMask();
