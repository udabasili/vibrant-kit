import clsx from 'clsx';
import React from 'react';

import { SpinnerProps, sizes, variants } from './Spinner.types';
import './Spinner.css';

export const Spinner = ({ size = 'md', variant = 'primary' }: SpinnerProps) => {
	return <div className={clsx(['spinner', sizes[size], variants[variant]])} />;
};

export default Spinner;
