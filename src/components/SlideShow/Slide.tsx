import React from 'react';

import { SlideProps } from './Slide.types';
import './slide.css';
import SlideControllers from './SlideControllers';

const Slide = ({
	imageUrl,
	title,
	description,
	slideButton,
	currentSlideIndex,
	arrayLength,
	setCurrentSlideIndex,
}: SlideProps) => {
	return (
		<div className="slide">
			<img className="slide__image" alt={title ? title : 'slide-image'} src={imageUrl} />
			{title ? <span className="slide__title">{title}</span> : null}
			{description ? (
				<div className="slide__description">
					<span>{description}</span>
				</div>
			) : null}
			{slideButton ? slideButton : null}
			<SlideControllers
				currentSlideIndex={currentSlideIndex}
				arrayLength={arrayLength}
				setCurrentSlideIndex={setCurrentSlideIndex}
			/>
		</div>
	);
};

export default Slide;
