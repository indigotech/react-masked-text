import React, {
  useState,
  useRef,
  useEffect,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";

import MaskResolver from "./mask-resolver";
import { MaskKey } from "./masks";

export interface BaseTextComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  kind?: string;
  options?: any; // Adjust based on what options might be
}

const BaseTextComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  BaseTextComponentProps
> = (props, ref) => {
  const maskHandlerRef = useRef<any>(null); // Adjust the type according to MaskResolver

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { defaultValue, value, kind, onChange, options, ...otherProps } = props;

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

    maskHandlerRef.current = MaskResolver.resolve(kind as MaskKey);

    let masked =
      maskHandlerRef.current?.getValue(defaultValue || "", options) ||
      defaultValue;

    if (isControlled) {
      masked = maskHandlerRef.current?.getValue(value || "", options) || value;
    }

    setMaskedValue(masked);
  }, [kind, defaultValue, options, value, isControlled]);

  // const isValid = (): boolean => {
  //   const val = isControlled() ? props.value || '' : value;
  //   return maskHandlerRef.current.validate(getDefaultValue(val));
  // };

  // const getRawValue = (): string => {
  //   const val = isControlled() ? props.value || '' : value;
  //   return maskHandlerRef.current.getRawValue(getDefaultValue(val));
  // };

  const handleChangeText = async (text: string) => {
    const maskedText =
      maskHandlerRef.current?.getValue(text || "", options) || text;
    onChange?.(maskedText);

    if (!isControlled()) {
      setMaskedValue(maskedText);
    }
  };

  return (
    <input
      ref={ref}
      {...otherProps}
      value={maskedValue}
      onChange={(event) => handleChangeText(event.currentTarget.value)}
    />
  );
};

export default React.forwardRef(BaseTextComponent);
