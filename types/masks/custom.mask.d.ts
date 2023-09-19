import BaseMask from './base.mask';
interface Settings {
    mask?: string;
    translation?: any;
    getRawValue?: (maskedValue: any, settings: Settings) => any;
    validator?: (value: any, settings: Settings) => boolean;
}
export declare class CustomMask extends BaseMask {
    static getType(): string;
    getValue(value: string, settings: Settings): string;
    getRawValue(maskedValue: string, settings: Settings): string;
    validate(value: string, settings: Settings): boolean;
}
export {};
