import BaseMask from './base.mask';
export declare class CpfMask extends BaseMask {
    static getType(): string;
    getValue(value: string): string;
    getRawValue(maskedValue: string): string;
    validate(value: string): boolean;
}
