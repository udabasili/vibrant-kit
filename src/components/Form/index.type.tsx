import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export type FormControlProps = {
	children: React.ReactNode;
	label: string;
	containerClassName?: string;
	error?: FieldError | undefined;
	name: string;
};

export type ExtendedFormControlProps = Omit<FormControlProps, 'containerClassName' | 'children'>;

export type TextAreaProps = ExtendedFormControlProps & {
	className?: string;
	registration: Partial<UseFormRegisterReturn>;
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	type?: 'text' | 'email' | 'password';
	className?: string;
	registration: Partial<UseFormRegisterReturn>;
} & ExtendedFormControlProps;
