import React from 'react';

export const variants = {
	white: 'badge--white',
	primary: 'badge--primary',
	secondary: 'badge--secondary',
};

export type BadgeProps = {
	label: string;
	containerClassName?: string;
	variant: keyof typeof variants;
};
