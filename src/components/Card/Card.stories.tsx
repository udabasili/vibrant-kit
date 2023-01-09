import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '../Button';

import Card from './Card';
import { CardProps } from './Card.type';

const meta: Meta = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		controls: { expanded: true },
	},
};

export const TestCardWithoutButton: Story<CardProps> = (props: CardProps) => {
	return (
		<Card
			cardDetails={{
				name: 'Card Text',
				imageUrl: 'https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1935026_1280.jpg',
			}}
			{...props}
		/>
	);
};

export const TestCardWithButton: Story<CardProps> = (props: CardProps) => {
	return (
		<Card
			cardDetails={{
				name: 'Card Text',
				imageUrl: 'https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1935026_1280.jpg',
			}}
			cardButton={
				<Button variant="primary" size="sm" type="button">
					Card Button
				</Button>
			}
			{...props}
		/>
	);
};
export default meta;
