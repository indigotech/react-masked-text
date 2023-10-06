/// <reference types="react" />
import React from "react";
import { InputHTMLAttributes } from "react";
//@ts-nocheck
declare class VanillaMasker {
    constructor(elements: any);
    unbindElementToMask(): void;
    bindElementToMask(maskFunction: any): void;
    maskMoney(opts: any): void;
    maskNumber(): void;
    maskAlphaNum(): void;
    maskPattern(pattern: any): void;
    unMask(): void;
}
declare const VMasker: {
    (el: any): VanillaMasker;
    toMoney(value: any, opts: any): string;
    toPattern(value: any, opts: any): any;
    toNumber(value: any): any;
    toAlphaNumeric(value: any): any;
};
declare class BaseMask {
    getVMasker(): typeof VMasker;
    mergeSettings<P = Record<string, any>>(obj1: P, obj2: P): P;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRawValue(maskedValue: string, settings?: any): any;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getDefaultValue(value: any, settings?: any): string;
    removeNotNumbers(text: string): string;
    removeWhiteSpaces(text: string): string;
}
interface CellPhoneSettings {
    withDDD?: boolean;
    dddMask?: string;
}
declare class CelPhoneMask extends BaseMask {
    static celPhone(): CelPhoneMask;
    static getType(): string;
    getValue(value: string, settings?: CellPhoneSettings): string;
    getRawValue(maskedValue: string): string;
    validate(value: string, settings?: CellPhoneSettings): boolean;
    _getMask(value: string, settings: CellPhoneSettings): string;
}
declare const celPhoneMask: () => CelPhoneMask;
declare class CnpjMask extends BaseMask {
    static cnpj(): CnpjMask;
    static getType(): string;
    getValue(value: string): string;
    getRawValue(maskedValue: string): string;
    validate(value: string): boolean;
}
declare const cnpjMask: () => CnpjMask;
interface Settings {
    mask?: string;
    translation?: any;
    getRawValue?: (maskedValue: any, settings: Settings) => any;
    validator?: (value: any, settings: Settings) => boolean;
}
declare class CustomMask extends BaseMask {
    private _mask;
    constructor(customMask?: string);
    static custom(customMask: string): CustomMask;
    static getType(): string;
    getValue(value: string, settings?: Settings): string;
    getRawValue(maskedValue: string, settings: Settings): string;
    validate(value: string, settings: Settings): boolean;
}
declare const customMask: (customMask: string) => CustomMask;
declare class CpfMask extends BaseMask {
    static cpf(): CpfMask;
    static getType(): string;
    getValue(value: string): string;
    getRawValue(maskedValue: string): string;
    validate(value: string): boolean;
}
declare const cpfMask: () => CpfMask;
interface ICreditCardSettings {
    obfuscated?: boolean;
}
declare class CreditCardMask extends BaseMask {
    static creditCard(): CreditCardMask;
    static getType(): string;
    getValue(value: string, settings?: ICreditCardSettings): string;
    validate(value: string, settings: ICreditCardSettings): boolean;
    getRawValue(maskedValue: string): string[];
    private _getMask;
}
declare const creditCardMask: () => CreditCardMask;
interface Settings$0 {
    format: string;
}
declare class DatetimeMask extends BaseMask {
    static datetime(): DatetimeMask;
    static getType(): string;
    getValue(value: string, settings?: Settings$0): string;
    getRawValue<Date>(maskedValue: string, settings: Settings$0): Date;
    validate(value: string, settings: Settings$0): boolean;
    _getMergedSettings(settings: Settings$0): Settings$0;
    /** https://stackoverflow.com/a/1353711/3670829 */
    _isValidDate(d: Date): boolean;
}
declare const datetimeMask: () => DatetimeMask;
interface MoneyMaskSettings {
    precision: number;
    separator: string;
    delimiter: string;
    unit: string;
    suffixUnit: string;
    zeroCents: boolean;
}
declare class MoneyMask extends BaseMask {
    static money(): MoneyMask;
    static getType(): string;
    getValue(value: string, settings?: Partial<MoneyMaskSettings>, oldValue?: string): string;
    getRawValue(maskedValue: string, settings?: Partial<MoneyMaskSettings>): number;
    validate(): boolean;
    private _insert;
}
declare const moneyMask: () => MoneyMask;
declare class OnlyNumbersMask extends BaseMask {
    static onlyNumbers(): OnlyNumbersMask;
    static getType(): string;
    getValue(value: string): string;
    getRawValue(maskedValue: string): string;
    validate(): boolean;
}
declare const onlyNumbersMask: () => OnlyNumbersMask;
declare class ZipCodeMask extends BaseMask {
    static zipCode(): ZipCodeMask;
    static getType(): string;
    getValue(value: string): string;
    getRawValue(maskedValue: string): string;
    validate(value: string): boolean;
}
declare const zipCodeMask: () => ZipCodeMask;
type MaskHandlerType = CelPhoneMask | CnpjMask | CustomMask | CpfMask | CreditCardMask | DatetimeMask | MoneyMask | OnlyNumbersMask | ZipCodeMask;
interface BaseTextComponentProps extends InputHTMLAttributes<HTMLInputElement> {
    mask?: MaskHandlerType;
}
declare const _default: React.ForwardRefExoticComponent<BaseTextComponentProps & React.RefAttributes<HTMLInputElement>>;
export { _default as default, BaseTextComponentProps, BaseMask, MaskHandlerType, celPhoneMask, customMask, cnpjMask, cpfMask, creditCardMask, datetimeMask, moneyMask, onlyNumbersMask, zipCodeMask };
