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

export const Masks: { [key in MaskKey]: any } = {
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

export { CelPhoneMask, CnpjMask, CreditCardMask, CustomMask, DatetimeMask, MoneyMask, OnlyNumbersMask, ZipCodeMask, CpfMask };
