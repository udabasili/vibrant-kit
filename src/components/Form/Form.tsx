import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import * as React from 'react';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

import './index.css';
type FormProps<FormValues, Schema> = {
	schema?: Schema;
	className?: string;
	onSubmit: SubmitHandler<FormValues>;
	children: (methods: UseFormReturn<FormValues>) => React.ReactNode;
	options?: UseFormProps<FormValues>;
	id?: string;
};

const Form = <
	FormValues extends Record<string, unknown> = Record<string, unknown>,
	Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>
>(
	props: FormProps<FormValues, Schema>
) => {
	const { className, onSubmit, options, schema, children, id } = props;
	const methods = useForm<FormValues>({ ...options, resolver: schema && zodResolver(schema) });
	return (
		<form className={clsx('form', className)} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
			{children(methods)}
		</form>
	);
};

export default Form;
