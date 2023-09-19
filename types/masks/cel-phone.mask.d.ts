import BaseMask from './base.mask';
interface CellPhoneSettings {
    withDDD: boolean;
    dddMask: string;
}
export declare class CelPhoneMask extends BaseMask {
    static getType(): string;
    getValue(value: string, settings: CellPhoneSettings): string;
    getRawValue(maskedValue: string): string;
    validate(value: string, settings: CellPhoneSettings): boolean;
    _getMask(value: string, settings: CellPhoneSettings): string;
}
export {};
