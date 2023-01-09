import clsx from 'clsx';
import React from 'react';
import './index.css';

import { FormControlProps } from './index.type';

const FormControl = (props: FormControlProps) => {
	const { containerClassName, label, children, error, name } = props;
	return (
		<div className={clsx(['form-control', containerClassName])}>
			{children}
			<label className="form-control__label" htmlFor={name}>
				{label}
			</label>
			{error?.message ? (
				<div className="error-message" role="alert" aria-label={error.message}>
					{error.message}
				</div>
			) : null}
		</div>
	);
};

export default FormControl;
