import BaseMask from './base.mask';
export declare class OnlyNumbersMask extends BaseMask {
    static getType(): string;
    getValue(value: string): string;
    getRawValue(maskedValue: string): string;
    validate(): boolean;
}
