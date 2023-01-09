export const variants = {
	primary: 'primary',
	inverse: 'inverse',
	success: 'success',
	dark: 'dark',
	danger: 'danger',
};

export const sizes = {
	sm: 'sm',
	md: 'md',
	lg: 'lg',
};

export type IconProps =
	| {
			startIcon: React.ReactElement;
			endIcon?: never;
	  }
	| {
			startIcon?: never;
			endIcon: React.ReactElement;
	  }
	| {
			startIcon?: undefined;
			endIcon?: undefined;
	  };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	size: keyof typeof sizes;
	variant: keyof typeof variants;
	isLoading?: boolean;
	type: 'button' | 'submit';
} & IconProps;
