import { Story, Meta } from '@storybook/react';
import React from 'react';

import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta = {
	title: 'Components/Elements/Button',
	component: Button,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (props: JSX.IntrinsicAttributes & ButtonProps) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary Button',
	variant: 'primary',
};

export const Inverse = Template.bind({});
Inverse.args = {
	children: 'Inverse',
	variant: 'inverse',
};

export const Danger = Template.bind({});
Danger.args = {
	children: 'Danger Button',
	variant: 'danger',
};

export const Success = Template.bind({});
Success.args = {
	children: 'Success Button',
	variant: 'success',
};

export const Dark = Template.bind({});
Dark.args = {
	children: 'Dark Button',
	variant: 'dark',
};

export const Small = Template.bind({});
Small.args = {
	children: 'Small Button',
	size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
	children: 'Medium Button',
	size: 'md',
};

export const Large = Template.bind({});
Large.args = {
	children: 'Large Button',
	size: 'lg',
};
