import BaseTextComponent from './base-text-component';
import React from 'react';
import MaskService from "./mask-service";

export { MaskService };

export default class TextInputMask extends BaseTextComponent {

	getElement() {
		return this._input;
	}

	_onChangeText(text) {
		let self = this;

		if (!this._checkText(text)) {
			return;
		}

		self.updateValue(text)
			.then(maskedText => {
				if (self.props.onChangeText) {
					self.props.onChangeText(maskedText);
				}
			});
	}

	_checkText(text) {
		if (this.props.checkText) {
			const value = this._isControlled() ? this.props.value : this.state.value;
			return this.props.checkText(value, text);
		}

		return true;
	}

	render() {
		const { defaultValue, value, onChange, onChangeText, ...otherProps } = this.props;
		const maskedValue = this._getDefaultMaskedValue(this._isControlled() ? value : this.state.value)

		if (value !== undefined && defaultValue !== undefined) {
			console.error(`react-masked-text: ERROR - defaultValue and value shouldn't be set at the same time!`);
		}

		return (
			<input
				ref={(ref) => {this._input = ref}}
				onChange={(event) => this._onChangeText(event.currentTarget.value)}
				value={maskedValue}
				{...otherProps}
			/>
		);
	}
}
