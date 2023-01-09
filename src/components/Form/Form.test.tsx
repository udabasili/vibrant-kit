import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { z } from 'zod';

import Button from '../Button';

import Form from './Form';
import Input from './Input';

const testData = {
	title: 'Hello World',
};

const schema = z.object({
	title: z.string(),
});

type OnSubmitProps = {
	handleSubmit: jest.Mock<any, any>;
};

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
	return screen.getByDisplayValue(inputValue) === e;
}

const form = ({ handleSubmit }: OnSubmitProps) => {
	console.log(handleSubmit);
	render(
		<Form<typeof testData, typeof schema> onSubmit={handleSubmit} schema={schema} id="my-form">
			{({ register, formState }) => (
				<>
					<Input
						label="Title"
						error={formState.errors['title']}
						registration={register('title')}
						name="title"
					/>
					<Button size={'sm'} variant="primary" type={'submit'}>
						Submit
					</Button>
				</>
			)}
		</Form>
	);
};

describe('Form Component', () => {
	describe('Interaction', () => {
		test('should render and submit', async () => {
			const handleSubmit = jest.fn();

			render(
				<Form<typeof testData, typeof schema> onSubmit={handleSubmit} schema={schema} id="my-form">
					{({ register, formState }) => (
						<>
							<Input
								label="Title"
								error={formState.errors['title']}
								registration={register('title')}
								name={'title'}
							/>

							<button>Submit</button>
						</>
					)}
				</Form>
			);

			// userEvent.click(screen.getByRole('button', { name: "Submit" }));
			// console.log(count);
			const input = screen.getByLabelText('Title');

			fireEvent.change(input, { target: { value: testData.title } });
			expect(hasInputValue(input, testData.title)).toBe(true);
			userEvent.click(screen.getByRole('button', { name: 'Submit' }));

			// await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything()));
		});
	});
});
