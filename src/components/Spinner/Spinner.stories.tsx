import { Story, Meta } from '@storybook/react';
import React from 'react';

import Spinner from './Spinner';
import { SpinnerProps } from './Spinner.types';

const meta: Meta = {
	title: 'Components/Elements/Spinner',
	component: Spinner,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<SpinnerProps> = (props: JSX.IntrinsicAttributes & SpinnerProps) => <Spinner {...props} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary Spinner',
	variant: 'primary',
};

export const White = Template.bind({});
White.args = {
	children: 'Inverse',
	variant: 'white',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Small Spinner',
	size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Medium Spinner',
	size: 'md',
};

export const Large = Template.bind({});
Large.args = {
	children: 'Large Spinner',
	size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	children: 'Extra Large Spinner',
	size: 'xl',
};
