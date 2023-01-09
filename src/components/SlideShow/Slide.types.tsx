import { Dispatch, SetStateAction } from 'react';

export type SlideProps = {
	imageUrl: string;
	title?: string;
	description?: string;
	slideButton?: React.ReactElement;
	setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
	currentSlideIndex: number;
	arrayLength: number;
};

export type SlideShowProps = {
	slideShowData: Array<{
		imageUrl: string;
		title?: string;
		description?: string;
	}>;
};

export type SlideControllersProps = {
	setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
	currentSlideIndex: number;
	arrayLength: number;
};
