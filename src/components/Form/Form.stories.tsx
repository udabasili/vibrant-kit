import { Meta } from '@storybook/react';
import React from 'react';
import { z } from 'zod';

import Button from '../Button';

import Form from './Form';
import Input from './Input';

type FormValues = {
	name: string;
	email: string;
	password: string;
};

const Schema = z.object({
	name: z.string(),
	email: z.string().email().min(2),
	password: z.string().min(6),
});

const TestForm = ({ hideSubmit = false }: { hideSubmit?: boolean }) => {
	return (
		<Form<FormValues, typeof Schema>
			onSubmit={async (values) => {
				alert(JSON.stringify(values, null, 2));
			}}
			id="my-form"
		>
			{({ register, formState }) => {
				console.log(formState.errors);
				return (
					<>
						<Input
							registration={register('name')}
							label={'Username'}
							error={formState.errors['name']}
							name={'name'}
						/>
						<Input
							registration={register('password')}
							label={'Password'}
							type="password"
							error={formState.errors['password']}
							name="password"
						/>
						<Input
							registration={register('email')}
							label={'Email'}
							type="email"
							error={formState.errors['email']}
							name="email"
						/>
						{!hideSubmit && (
							<Button onClick={close} size={'sm'} variant="primary" type={'submit'}>
								submit
							</Button>
						)}
					</>
				);
			}}
		</Form>
	);
};

const meta: Meta = {
	title: 'Components/Form',
	component: TestForm,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

export const DefaultForm = () => {
	return <TestForm hideSubmit />;
};
