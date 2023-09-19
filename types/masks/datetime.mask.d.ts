import BaseMask from './base.mask';
interface Settings {
    format: string;
}
export declare class DatetimeMask extends BaseMask {
    static getType(): string;
    getValue(value: string, settings: Settings): string;
    getRawValue<Date>(maskedValue: string, settings: Settings): Date;
    validate(value: string, settings: Settings): boolean;
    _getMergedSettings(settings: Settings): Settings;
    /** https://stackoverflow.com/a/1353711/3670829 */
    _isValidDate(d: Date): boolean;
}
export {};
