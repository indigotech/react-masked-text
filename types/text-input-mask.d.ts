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
    getValue(value: string): string;
    mergeSettings<P = Record<string, any>>(obj1: P, obj2: P): P;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRawValue(maskedValue: string, settings?: any): any;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getDefaultValue(value: any, settings?: any): string;
    removeNotNumbers(text: string): string;
    removeWhiteSpaces(text: string): string;
}
interface BaseTextComponentProps extends InputHTMLAttributes<HTMLInputElement> {
    mask?: BaseMask;
}
declare const _default: React.ForwardRefExoticComponent<BaseTextComponentProps & React.RefAttributes<HTMLInputElement>>;
export { _default as default, BaseTextComponentProps };
