import BaseMask from './base.mask';
interface MoneyMaskSettings {
    precision: number;
    separator: string;
    delimiter: string;
    unit: string;
    suffixUnit: string;
    zeroCents: boolean;
}
export declare class MoneyMask extends BaseMask {
    static getType(): string;
    getValue(value: string, settings?: Partial<MoneyMaskSettings>, oldValue?: string): string;
    getRawValue(maskedValue: string, settings?: Partial<MoneyMaskSettings>): number;
    validate(): boolean;
    private _insert;
}
export {};
