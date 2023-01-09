import clsx from 'clsx';
import React from 'react';

import FormControl from './FormControl';
import { InputProps } from './index.type';
import './index.css';

export const Input = (props: InputProps) => {
	const { type = 'text', label, className, registration, error, name } = props;
	return (
		<FormControl label={label} error={error} name={name}>
			<input type={type} className={clsx('input', className)} {...registration} id={name} />
		</FormControl>
	);
};

export default Input;
