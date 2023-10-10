import React, {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import BaseMask from "./masks/base.mask";
import { celPhoneMask } from "./masks/cel-phone.mask";
import { cnpjMask } from "./masks/cnpj.mask";
import { customMask } from "./masks/custom.mask";
import { cpfMask } from "./masks/cpf.mask";
import { creditCardMask } from "./masks/credit-card.mask";
import { datetimeMask } from "./masks/datetime.mask";
import { moneyMask } from "./masks/money.mask";
import { onlyNumbersMask } from "./masks/only-numbers.mask";
import { zipCodeMask } from "./masks/zip-code.mask";

export interface BaseTextComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  mask?: BaseMask;
}

const BaseTextComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  BaseTextComponentProps
> = (props, ref) => {
  const { defaultValue, value, mask, type, onChange, ...otherProps } = props;

  const maskHandler = mask as any; // Adjust the type according to MaskResolver

  const [maskedValue, setMaskedValue] = useState("");

  const isControlled = React.useCallback((): boolean => {
    return value !== undefined;
  }, [value]);

  useEffect(() => {
    if (defaultValue !== undefined && value !== undefined) {
      throw new Error(
        "Use either the defaultValue prop, or the value prop, but not both"
      );
    }

    let masked = maskHandler?.getValue(defaultValue || "");

    if (isControlled) {
      masked = maskHandler?.getValue(value || "") || value;
    }

    setMaskedValue(masked);
  }, [mask, defaultValue, value, isControlled]);

  const handleChangeText = async (text: string) => {
    const maskedText = mask?.getValue(text || "") || text;
    onChange?.(maskedText as any);

    if (!isControlled()) {
      setMaskedValue(maskedText);
    }
  };
  return (
    <input
      ref={ref}
      type={type ?? "text"}
      {...otherProps}
      value={maskedValue}
      onChange={(event) => handleChangeText(event.currentTarget.value)}
    />
  );
};

export default React.forwardRef(BaseTextComponent);
export {
  BaseMask,
  celPhoneMask,
  customMask,
  cnpjMask,
  cpfMask,
  creditCardMask,
  datetimeMask,
  moneyMask,
  onlyNumbersMask,
  zipCodeMask,
};
