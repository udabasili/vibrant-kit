import React, { useState } from 'react';

import Slide from './Slide';
import { SlideShowProps } from './Slide.types';
import SlideControllers from './SlideControllers';
import './slide.css';

const SlideShow = ({ slideShowData }: SlideShowProps) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	return (
		<div className="slideshow">
			<Slide
				imageUrl={slideShowData[currentSlideIndex].imageUrl}
				title={slideShowData[currentSlideIndex].title}
				description={slideShowData[currentSlideIndex].description}
				currentSlideIndex={currentSlideIndex}
				setCurrentSlideIndex={setCurrentSlideIndex}
				arrayLength={slideShowData.length}
			/>
		</div>
	);
};

export default SlideShow;
