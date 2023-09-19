import { CelPhoneMask } from './cel-phone.mask';
import { CnpjMask } from './cnpj.mask';
import { CpfMask } from './cpf.mask';
import { CreditCardMask } from './credit-card.mask';
import { CustomMask } from './custom.mask';
import { DatetimeMask } from './datetime.mask';
import { MoneyMask } from './money.mask';
import { OnlyNumbersMask } from './only-numbers.mask';
import { ZipCodeMask } from './zip-code.mask';
export var Masks = {
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
//# sourceMappingURL=index.js.map