import React, {
  useState,
  useRef,
  useEffect,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import MaskResolver from "./mask-resolver";
import { MaskKey, Masks } from "./masks";

export interface BaseTextComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  mask?: {
    kind: MaskKey;
    type: string;
    mask: string;
  };
}

const BaseTextComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  BaseTextComponentProps
> = (props, ref) => {
  const maskHandlerRef = useRef<any>(null); // Adjust the type according to MaskResolver

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { defaultValue, value, mask, onChange, ...otherProps } = props;

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

    maskHandlerRef.current = MaskResolver.resolve(
      (mask?.kind as MaskKey) || "custom"
    );

    let masked =
      maskHandlerRef.current?.getValue(defaultValue || "", {
        mask: mask?.mask || "",
      }) || defaultValue;

    if (isControlled) {
      masked =
        maskHandlerRef.current?.getValue(value || "", {
          mask: mask?.mask || "",
        }) || value;
    }

    setMaskedValue(masked);
  }, [mask, defaultValue, value, isControlled]);

  const handleChangeText = async (text: string) => {
    const maskedText =
      maskHandlerRef.current?.getValue(text || "", {
        mask: mask?.mask || "",
      }) || text;
    onChange?.(maskedText);

    if (!isControlled()) {
      setMaskedValue(maskedText);
    }
  };
  return (
    <input
      ref={ref}
      type={mask?.type || "text"}
      {...otherProps}
      value={maskedValue}
      onChange={(event) => handleChangeText(event.currentTarget.value)}
    />
  );
};

export default React.forwardRef(BaseTextComponent);
export { Masks, MaskKey };
