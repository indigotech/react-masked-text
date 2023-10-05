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

export type MaskHandlerType = CelPhoneMask | CpfMask | CreditCardMask | CustomMask | DatetimeMask | MoneyMask | OnlyNumbersMask | ZipCodeMask | CnpjMask;
export class Masks {
  static celPhone() {
    return new CelPhoneMask();
  }
  static cpf() {
    return new CpfMask();
  }
  static creditCard() {
    return new CreditCardMask();
  }
  static custom(customMask: string) {
    return new CustomMask(customMask);
  }
  static datetime() {
    return new DatetimeMask();
  }
  static money() {
    return new MoneyMask();
  }
  static onlyNumbers() {
    return new OnlyNumbersMask();
  }
  static zipCode() {
    return new ZipCodeMask();
  }
  static cnpj() {
    return new CnpjMask();
  }
}

export { CelPhoneMask, CnpjMask, CreditCardMask, CustomMask, DatetimeMask, MoneyMask, OnlyNumbersMask, ZipCodeMask, CpfMask };
