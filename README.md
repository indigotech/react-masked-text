# react-masked-text

This is a simple masked text (normal text and input text) component for React.

Thanks to [vanilla-masker](https://github.com/BankFacil/vanilla-masker) =).
Thanks to [benhurott](https://github.com/benhurott/react-native-masked-text)

## Supported Versions
React: 16.0.0 or higher

## Install
`npm install react-masked-text --save`

## Usage (TextInputMask)
```tsx
import React from 'react';

// import the component and the mask
import { TextInputMask, datetimeMask } from 'react-masked-text';

export const MyComponent = () => {
  const myDateTextRef = React.createRef();

  return (
	  <TextInputMask
	    ref={myDateTextRef}
	    mask={datetimeMask()} 
	  />
  );
}

```

## Props

### value
If you set this prop, this component becomes a controlled component.

### defaultValue
Use this props if you're using this component as an uncontrolled component and you want to set its default value (initial value).
You may notice that it doesn't make sense to set value and defaultValue at the same time.

### mask

**creditCardMask:** use the mask `9999 9999 9999 9999` and `text` keyboard. <br />
**cpfMask:** use the mask `999.999.999-99` and `text` keyboard. <br />
**cnpjMask:** use the mask `99.999.999/9999-99` and `text` keyboard. <br />
**zipCodeMask:** use the mask `99999-999` and `text` keyboard. <br />
**onlyNumbersMask:** accept only numbers on field with `numeric` keyboard.<br />
**moneyMask:** use the mask `R$ 0,00` on the field with `text` keyboard. <br />
**celPhoneMask:** use the mask `(99) 9999-9999` or `(99) 99999-9999` (changing automaticaly by length).<br />
**datetimeMask:** use datetime mask with a similiar [moment](https://momentjs.com/docs/#/parsing/string-format/) format (default DD/MM/YYYY HH:mm:ss).<br />
**customMask:** use your custom mask (see later in this doc). <br />


### customMask
Use `customMask` to basic mask formatting, use letter 'A' to letters and number '9' to numbers and separators like a `space`, `/`, `-`, etc... for example: </br>

```tsx
return (
	  <TextInputMask
	    ref={myDateTextRef}
	    mask={customMask('AAA-999/99')} 
	  />
  );
```


## Methods

* `getElement()`: return the instance of *TextInput* component.
* `isValid()`: if the value inputed is valid for the mask.
	* *credit-card*: return true if the mask is complete.
	* *cpf*: return true if the mask is complete and cpf is valid.
	* *cnpj*: return true if the mask is complete and cnpj is valid.
	* *zip-code*: return true if the mask is complete.
	* *only-numbers*: always returns true.
	* *money*: always returns true.
	* *cel-phone*: return true if the mask is complete.
	* *datetime*: return true if the date value is valid for format.
	* *custom*: use custom validation, if it not exist, always returns true.
* `getRawValue()`: get the converted value of mask.
	* *credit-card*: return the array with the value parts. Ex: `1234 1234 1234 1234` returns `[1234, 1234, 1234, 1234]`.
	* *cpf*: return the value without mask.
	* *cnpj*: return the value without mask.
	* *zip-code*: return the value without mask.
	* *only-numbers*: return the value without mask.
	* *money*: return the Number value. Ex: `R$ 1.234,56` returns `1234.56`.
	* *cel-phone*: return the value without mask.
	* *datetime*: return a Date object for the date and format.
	* *custom*: use custom method (passed in options). If it not exists, returns the current value.



## Extra (BaseMask)
If you want, we expose the `BaseMask`. You can use it to create your own mask:

Ex:

``` ts
import { BaseMask } from 'react-masked-text';

interface DollarMoneyMaskSettings {
  precision: number;
  separator: string;
  delimiter: string;
  unit: string;
  suffixUnit: string;
  zeroCents: boolean;
}

const DOLLAR_MONEY_MASK_SETTINGS: DollarMoneyMaskSettings = {
  precision: 2,
  separator: '.',
  delimiter: ',',
  unit: 'U$',
  suffixUnit: '',
  zeroCents: false,
};

class DollarMoneyMask extends BaseMask {
  static getType(): string {
    return 'dollar-money';
  }

  getValue(value: string, settings?: Partial<MoneyMaskSettings>, oldValue?: string): string {
    const mergedSettings = super.mergeSettings(DOLLAR_MONEY_MASK_SETTINGS, settings) as MoneyMaskSettings;

    if (mergedSettings.suffixUnit && oldValue && value) {
      if (value.length === oldValue.length - 1) {
        const cleared = this.removeNotNumbers(value);
        value = cleared.substring(0, cleared.length - 1);
      }
    }

    const masked = this.getVMasker().toMoney(value, mergedSettings);
    return masked;
  }

  getRawValue(maskedValue: string, settings?: Partial<MoneyMaskSettings>): number {
    const mergedSettings = super.mergeSettings(DOLLAR_MONEY_MASK_SETTINGS, settings) as MoneyMaskSettings;
    let normalized = super.removeNotNumbers(maskedValue);

    const dotPosition = normalized.length - mergedSettings.precision;
    normalized = this._insert(normalized, dotPosition, '.');

    return Number(normalized);
  }

  validate(): boolean {
    return true;
  }

  private _insert(text: string, index: number, stringToInsert: string): string {
    if (index > 0) {
      return text.substring(0, index) + stringToInsert + text.substring(index, text.length);
    } else {
      return stringToInsert + text;
    }
  }
}

export const dollarMoneyMask = () => new DollarMoneyMask();

// dollar-money -> U$ 9,475.28
```
