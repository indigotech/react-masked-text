import BaseMask from './base.mask';
interface ICreditCardSettings {
    obfuscated?: boolean;
}
export declare class CreditCardMask extends BaseMask {
    static getType(): string;
    getValue(value: string, settings: ICreditCardSettings): string;
    validate(value: string, settings: ICreditCardSettings): boolean;
    getRawValue(maskedValue: string): string[];
    private _getMask;
}
export {};
