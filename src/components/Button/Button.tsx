/* eslint-disable no-mixed-spaces-and-tabs */
import clsx from 'clsx';
import React from 'react';

import { ButtonProps, sizes, variants } from './Button.types';
import './Button.css';

const Button = (props: ButtonProps) => {
	const { size, startIcon, endIcon, variant, isLoading, type, ...otherProps } = props;
	return (
		<button
			data-testid="button-component"
			type={type}
			className={clsx(['button-container', sizes[size], variants[variant]])}
			{...otherProps}
		>
			{/* {isLoading && <Spinner size="sm" />} */}
			{!isLoading && startIcon}
			<span>{otherProps.children}</span>
			{!isLoading && endIcon}
		</button>
	);
};

export default Button;
