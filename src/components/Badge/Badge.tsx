import clsx from 'clsx';
import React from 'react';

import './Badge.css';
import { BadgeProps, variants } from './Badge.types';

const Badge = (props: BadgeProps) => {
	const { containerClassName = '', label, variant } = props;
	return (
		<div className={clsx(['badge', variants[variant], containerClassName])}>
			<span className={clsx(['badge__label'])}> {label}</span>
		</div>
	);
};

export default Badge;
