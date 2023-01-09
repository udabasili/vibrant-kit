import React from 'react';

export const sizes = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
	xl: 'xl',
	full: 'full',
};

export interface DrawerProps {
	isOpen: boolean;
	close: () => void;
	title: string;
	children: React.ReactNode;
	renderFooter: () => React.ReactNode;
	size?: keyof typeof sizes;
	containerClassName?: string;
}
