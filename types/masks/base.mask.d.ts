import VMasker from './internal-dependencies/vanilla-masker.js';
export default class BaseMask {
    getVMasker(): typeof VMasker;
    mergeSettings<P = Record<string, any>>(obj1: P, obj2: P): P;
    getRawValue(maskedValue: string, settings?: any): any;
    getDefaultValue(value: any, settings?: any): string;
    removeNotNumbers(text: string): string;
    removeWhiteSpaces(text: string): string;
}
