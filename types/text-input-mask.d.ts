/// <reference types="react" />
import React from "react";
import { InputHTMLAttributes } from "react";
interface BaseTextComponentProps extends InputHTMLAttributes<HTMLInputElement> {
    kind?: string;
    options?: any;
}
declare const _default: React.ForwardRefExoticComponent<BaseTextComponentProps & React.RefAttributes<HTMLInputElement>>;
export { _default as default, BaseTextComponentProps };
