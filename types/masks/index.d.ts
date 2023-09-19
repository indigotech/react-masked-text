export type MaskKey = 'cel-phone' | 'cpf' | 'credit-card' | 'custom' | 'datetime' | 'money' | 'only-numbers' | 'zip-code' | 'cnpj';
export declare const Masks: {
    [key in MaskKey]: any;
};
