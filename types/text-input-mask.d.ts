/// <reference types="react" />
import React from "react";
import { InputHTMLAttributes } from "react";
type MaskKey = "cel-phone" | "cpf" | "credit-card" | "custom" | "datetime" | "money" | "only-numbers" | "zip-code" | "cnpj";
declare class Masks {
    static celPhone(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static cpf(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static creditCard(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static custom(customMask: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static datetime(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static money(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static onlyNumbers(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static zipCode(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
    static cnpj(customMask?: string): {
        mask: string;
        type: string;
        kind: MaskKey;
    };
}
interface BaseTextComponentProps extends InputHTMLAttributes<HTMLInputElement> {
    mask?: {
        kind: MaskKey;
        type: string;
        mask: string;
    };
}
declare const _default: React.ForwardRefExoticComponent<BaseTextComponentProps & React.RefAttributes<HTMLInputElement>>;
export { _default as default, BaseTextComponentProps, Masks, MaskKey };
