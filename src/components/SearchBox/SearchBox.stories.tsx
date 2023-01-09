import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SearchProps } from './Search.types';
import SearchBox from './SearchBox';

const meta: Meta = {
	title: 'Components/Elements/SearchBox',
	component: SearchBox,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

const Template: Story<SearchProps> = (props: JSX.IntrinsicAttributes & SearchProps) => <SearchBox {...props} />;

export const SampleSearch = Template.bind({});
SampleSearch.args = {
	placeholder: 'Sample Search placeholder',
};
