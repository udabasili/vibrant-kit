import { Story, Meta } from '@storybook/react';
import React from 'react';

import { SlideProps, SlideShowProps } from './Slide.types';
import SlideShow from './SlideShow';

const meta: Meta = {
	title: 'Components/SlideShow',
	component: SlideShow,
	parameters: {
		controls: { expanded: true },
	},
};

const slideShowData = [
	{
		title: 'Slide 1',
		description: 'Description Slide 1',
		imageUrl: 'https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1935028_1280.jpg',
	},
	{
		title: 'Slide 2',
		description: 'Description Slide 2',
		imageUrl: 'https://cdn.pixabay.com/photo/2014/07/31/23/42/legs-407196_1280.jpg',
	},
	{
		title: 'Slide 3',
		description: 'Description Slide 3',
		imageUrl: 'https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_1280.jpg',
	},
];

export const SlideShowDefault: Story<SlideShowProps> = (props: JSX.IntrinsicAttributes & SlideShowProps) => (
	<SlideShow slideShowData={slideShowData} {...props} />
);

export default meta;
