export const sizes = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
	xl: 'xl',
};

export const variants = {
	light: 'light',
	primary: 'primary',
};

export type SpinnerProps = {
	size?: keyof typeof sizes;
	variant?: keyof typeof variants;
};
