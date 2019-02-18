# react-masked-text

This is a simple masked text (normal text and input text) component for React.

Thanks to [vanilla-masker](https://github.com/BankFacil/vanilla-masker) =).
Thanks to [benhurott](https://github.com/benhurott/react-native-masked-text)

## Supported Versions
React: 16.0.0 or higher

## Install
`npm install react-masked-text --save`

## Usage (TextInputMask)
```jsx
import React, {Component} from 'react';

// import the component
import {TextInputMask} from 'react-masked-text';

export default class MyComponent extends Component {
	constructor(props) {
		super(props);
	}

	isValid() {
		// isValid method returns if the inputed value is valid.
		// Ex: if you input 40/02/1990 30:20:20, it will return false
		//	   because in this case, the day and the hour is invalid.
		let valid = this.refs['myDateText'].isValid();

		// get converted value. Using kind=datetime, it returns the Date object.
		// If it's using kind=money, it returns a Number object.
		let rawValue = this.refs['myDateText'].getRawValue();
	}

	render() {
		// the kind is required but options is required only for some specific kinds.
		return (
			<TextInputMask
				ref={'myDateText'}
				kind={'datetime'}
				options={{
					format: 'DD-MM-YYYY HH:mm:ss'
				}} />
		);
	}
}

```

### Props

#### value
If you set this prop, this component becomes a controlled component.

#### defaultValue
Use this props if you're using this component as an uncontrolled component and you want to set its default value (initial value).
You may notice that it doesn't make sense to set value and defaultValue at the same time.

#### kind

*credit-card*: use the mask 9999 9999 9999 9999. It accepts options (see later in this doc). <br />
*cpf*: use the mask `999.999.999-99` and `numeric` keyboard. <br />
*cnpj*: use the mask `99.999.999/9999-99` and `numeric` keyboard. <br />
*zip-code*: use the mask `99999-999` and `numeric` keyboard. <br />
*only-numbers*: accept only numbers on field with `numeric` keyboard. <br />
*money*: use the mask `R$ 0,00` on the field with `numeric` keyboard. It accepts options (see later in this doc). <br />
*cel-phone*: use the mask `(99) 9999-9999` or `(99) 99999-9999` (changing automaticaly by length). It accepts options (see later in this doc). <br />
*datetime*: use datetime mask with a similiar [moment](https://momentjs.com/docs/#/parsing/string-format/) format (default DD/MM/YYYY HH:mm:ss). It accepts options (see later in this doc). <br />
*custom*: use your custom mask (see the options props later in this doc). <br />


#### onChangeText

Invoked after new value applied to mask.
```jsx
/**
 * @param {String} text the text AFTER mask is applied.
*/
onChangeText(text) {
	// ...
}

<TextInputMask
	kind={'only-numbers'}
	onChangeText={this.onChangeText.bind(this)} />
```


#### checkText

Allow you to check and prevent value to be inputed.

```jsx
/**
 * @param {String} previous the previous text in the masked field.
 * @param {String} next the next text that will be setted to field.
 * @return {Boolean} return true if must accept the value.
*/
checkText(previous, next) {
	return next === 'your valid value or other boolean condition';
}

<TextInputMask
	kind={'only-numbers'}
	checkText={this.checkText.bind(this)} />
```


#### Options

Some kinds accept options, use it like this: `<TextInputMask kind={'money'} options={{ unit: 'US$' }} />`


**For `kind={'money'}`** <br />
* *options={...}*
	* `precision` (Number, default 2): the decimal places.
	* `separator` (String, default ','): the decimal separator.
	* `delimiter` (String, default '.'): the thousand separator.
	* `unit`: (String, default 'R$'): the prefix text.
	* `suffixUnit` (String, default ''): the suffix text.
	* `zeroCents` (Boolean, default false): if must show cents.

**For `kind={'cel-phone'}`** <br />
* *options={...}*
	* `withDDD` (Boolean, default true): if the ddd will be include in the mask.
	* `dddMask` (String, default '(99) '): the default mask applied if `withDDD` is true.

**For `kind={'datetime'}`** <br />
* *options={...}*
	* `format` (String, default DD/MM/YYYY HH:mm:ss): moment date format. It accepts the following:
		* DD/MM/YYYY HH:mm:ss
		* DD/MM/YYYY
		* MM/DD/YYYY
		* YYYY/MM/DD
		* HH:mm:ss
		* HH:mm
		* hh:mm aa
		* HH
		* *You can use all of dates with `-` instead of `/` if you want*

**For `kind={'custom'}`** <br />
* *options={...}*

```jsx
{
	/**
	 * mask: (String | required | default '')
	 * the mask pattern
	 * 9 - accept digit.
	 * A - accept alpha.
	 * S - accept alphanumeric.
	 * * - accept all, EXCEPT white space.
	*/
	mask: '999#AAA',

	/**
	 * validator: (Function | optional | defaults returns true)
	 * use this funcion to inform if the inputed value is a valid value (for invalid phone numbers, for example). The isValid method use this validator.
	*/
	validator: function(value, settings) {
		return true
	},
	/**
	 * getRawValue: (Function | optional | defaults return current masked value)
	 * use this function to parse and return values to use what you want.
	 * for example, if you want to create a phone number mask (999) 999-99-99 but want to get only
	 * the numbers for value, use this method for this parse step.
	*/
	getRawValue: function(value, settings) {
		return 'my converted value';
	},
	/**
	 * translation: (Object | optional | defaults 9, A, S, *)
	 * the dictionary that translate mask and value.
	 * you can change defaults by simple override the key (9, A, S, *) or create some new.
	*/
	translation: {
		// this is a custom translation. The others (9, A, S, *) still works.
		// this translation will be merged and turns into 9, A, S, *, #.
		'#': function(val) {
			if (val === ' ') {
				return val;
			}

			// if returns null, undefined or '' (empty string), the value will be ignored.
			return null;
		},
		// in this case, we will override build-in * translation (allow all characters)
		// and set this to allow only blank spaces and some special characters.
		'*': function(val) {
			return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
		}
	}
}

```

**For `kind={'credit-card'}`** <br />
* *options={...}*
	* `obfuscated` (Boolean, default false): if the mask must be `9999 **** **** 9999`


### Methods

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



## Extra (MaskService)
If you want, we expose the `MaskService`. You can use it:

**Methods**
* static toMask(kind, value, settings): mask a value.
	* `kind` (String, required): the kind of the mask (`cpf`, `datetime`, etc...)
	* `value` (String, required): the value to be masked
	* `settings` (Object, optional): if the mask kind accepts options, pass it in the settings parameter
* static isValid(kind, value, settings): validate if the mask and the value match.
	* `kind` (String, required): the kind of the mask (`cpf`, `datetime`, etc...)
	* `value` (String, required): the value to be masked
	* `settings` (Object, optional): if the mask kind accepts options, pass it in the settings parameter

Ex:

``` jsx
import MaskService from 'react-masked-text/dist/mask-service';

var money = MaskService.toMask('money', '123', {
	unit: 'US$',
	separator: '.',
	delimiter: ','
});

// money -> US$ 1.23
```
