import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { SlideShowProps } from './Slide.types';
import SlideShow from './SlideShow';

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

describe('Slide Component', () => {
	describe('Interaction', () => {
		test('should show next slide when button is clicked', async () => {
			render(<SlideShow slideShowData={slideShowData} />);
			expect(screen.queryByText(slideShowData[1].title)).not.toBeInTheDocument();
			const slideButtonRight = screen.getByTestId('right');
			userEvent.click(slideButtonRight);
			await waitFor(() => {
				expect(screen.queryByText(slideShowData[0].title)).not.toBeInTheDocument();
			});
			expect(screen.queryByText(slideShowData[1].title)).toBeInTheDocument();
		});
	});
});
