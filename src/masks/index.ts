import { CelPhoneMask } from './cel-phone.mask';
import { CnpjMask } from './cnpj.mask';
import { CpfMask } from './cpf.mask';
import { CreditCardMask } from './credit-card.mask';
import { CustomMask } from './custom.mask';
import { DatetimeMask } from './datetime.mask';
import { MoneyMask } from './money.mask';
import { OnlyNumbersMask } from './only-numbers.mask';
import { ZipCodeMask } from './zip-code.mask';

export type MaskKey =
  | 'cel-phone'
  | 'cpf'
  | 'credit-card'
  | 'custom'
  | 'datetime'
  | 'money'
  | 'only-numbers'
  | 'zip-code'
  | 'cnpj';

export const MaskHandlers = {
  'cel-phone': CelPhoneMask,
  cpf: CpfMask,
  'credit-card': CreditCardMask,
  custom: CustomMask,
  datetime: DatetimeMask,
  money: MoneyMask,
  'only-numbers': OnlyNumbersMask,
  'zip-code': ZipCodeMask,
  cnpj: CnpjMask,
};

export class Masks {
  static celPhone(customMask?: string) {
    return {
      mask: customMask || '(99) 99999-9999',
      type: 'phone',
      kind: 'cel-phone' as MaskKey,
    }
  }
  static cpf(customMask?: string) {
    return {
      mask: customMask || '999.999.999-99',
      type: 'text',
      kind: 'cpf' as MaskKey,
    }
  }
  static creditCard(customMask?: string) {
    return {
      mask: customMask || '9999 9999 9999 9999',
      type: 'text',
      kind: 'credit-card' as MaskKey,
    }
  }
  static custom(customMask: string) {
    return {
      mask: customMask,
      type: 'text',
      kind: 'custom' as MaskKey,
    }
  }
  static datetime(customMask?: string) {
    return {
      mask: customMask || 'DD/MM/YYYY HH:mm:ss',
      type: 'text',
      kind: 'datetime' as MaskKey,
    }
  }
  static money(customMask?: string) {
    return {
      mask: customMask,
      type: 'text',
      kind: 'money' as MaskKey,
    }
  }
  static onlyNumbers(customMask?: string) {
    return {
      mask: customMask || undefined,
      type: 'number',
      kind: 'only-numbers' as MaskKey,
    }
  }
  static zipCode(customMask?: string) {
    return {
      mask: customMask || '99999-999',
      type: 'text',
      kind: 'zip-code' as MaskKey,
    }
  }
  static cnpj(customMask?: string) {
    return {
      mask: customMask || '99.999.999/9999-99',
      type: 'text',
      kind: 'cnpj' as MaskKey,
    }
  }
}
export { CelPhoneMask, CnpjMask, CreditCardMask, CustomMask, DatetimeMask, MoneyMask, OnlyNumbersMask, ZipCodeMask, CpfMask };
