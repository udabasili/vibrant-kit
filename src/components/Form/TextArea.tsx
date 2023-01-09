import clsx from 'clsx';
import React from 'react';

import FormControl from './FormControl';
import { TextAreaProps } from './index.type';
import './index.css';

const TextArea = (props: TextAreaProps) => {
	const { label, registration, className, error, name } = props;
	return (
		<FormControl label={label} containerClassName="form-control--text-area" error={error} name={name}>
			<textarea className={clsx('input__text-area', className)} {...registration} />
		</FormControl>
	);
};

export default TextArea;
