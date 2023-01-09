import { Story, Meta } from '@storybook/react';
import React from 'react';

import Badge from './Badge';
import { BadgeProps } from './Badge.types';

const meta: Meta = {
	title: 'Components/Elements/Badge',
	component: Badge,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<BadgeProps> = (props: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...props} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary Badge',
	variant: 'primary',
};

export const White = Template.bind({});
White.args = {
	label: 'White Badge',
	variant: 'white',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Secondary Badge',
	variant: 'secondary',
};
