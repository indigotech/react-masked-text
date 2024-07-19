import React, { ForwardRefRenderFunction, InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import BaseMask from './masks/base.mask';

export interface BaseTextComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: BaseMask;
}

const BaseTextComponent: ForwardRefRenderFunction<HTMLInputElement, BaseTextComponentProps> = (props, ref) => {
  const { defaultValue, value, mask, type, onChange, ...otherProps } = props;

  const maskHandler = mask as any; // Adjust the type according to MaskResolver

  const inputRef = useRef<HTMLInputElement>();

  const isControlled = React.useCallback((): boolean => {
    return value !== undefined;
  }, [value]);

  useEffect(() => {
    if (defaultValue !== undefined && value !== undefined) {
      throw new Error('Use either the defaultValue prop, or the value prop, but not both');
    }

    let masked = maskHandler?.getValue(defaultValue || '');

    if (isControlled()) {
      masked = maskHandler?.getValue(value || '') || value;
    }

    inputRef.current.value = masked;
  }, [mask, defaultValue, value, isControlled]);

  const handleChangeText = async (text: string) => {
    const maskedText = mask?.getValue(text || '') || text;
    onChange?.(maskedText as any);

    if (!isControlled()) {
      inputRef.current.value = maskedText;
    }
  };
  return (
    <input
      ref={(elementRef) => {
        inputRef.current = elementRef;
        if (typeof ref === 'function') {
          ref(elementRef);
        } else {
          ref.current = elementRef;
        }
      }}
      type={type ?? 'text'}
      {...otherProps}
      onChange={(event) => handleChangeText(event.currentTarget.value)}
    />
  );
};

export default React.forwardRef(BaseTextComponent);
