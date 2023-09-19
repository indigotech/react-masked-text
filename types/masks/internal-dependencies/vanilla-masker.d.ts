export = VMasker;
declare function VMasker(el: any): VanillaMasker;
declare namespace VMasker {
    function toMoney(value: any, opts: any): string;
    function toPattern(value: any, opts: any): any;
    function toNumber(value: any): any;
    function toAlphaNumeric(value: any): any;
}
declare class VanillaMasker {
    constructor(elements: any);
    elements: any;
    unbindElementToMask(): void;
    bindElementToMask(maskFunction: any): void;
    maskMoney(opts: any): void;
    opts: any;
    maskNumber(): void;
    maskAlphaNum(): void;
    maskPattern(pattern: any): void;
    unMask(): void;
}
