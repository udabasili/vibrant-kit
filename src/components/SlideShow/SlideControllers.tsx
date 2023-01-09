import clsx from 'clsx';
import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import './slide.css';
import { SlideControllersProps } from './Slide.types';

const SlideControllers = ({ setCurrentSlideIndex, currentSlideIndex, arrayLength }: SlideControllersProps) => {
	function slideButtonController(direction: 'right' | 'left') {
		if (direction === 'left') {
			if (currentSlideIndex === 0) {
				setCurrentSlideIndex(2);
			} else {
				setCurrentSlideIndex(currentSlideIndex - 1);
			}
		}

		if (direction === 'right') {
			if (currentSlideIndex === 2) {
				setCurrentSlideIndex(0);
			} else {
				setCurrentSlideIndex(currentSlideIndex + 1);
			}
		}
	}
	return (
		<>
			<FaArrowAltCircleLeft
				className={clsx(['slide__button--left', 'slide__button', currentSlideIndex === 0 ? 'disabled' : ''])}
				onClick={() => slideButtonController('left')}
				role="button"
				data-testid="left"
				aria-disabled={currentSlideIndex === 0}
			/>
			<FaArrowAltCircleRight
				className={clsx([
					'slide__button--right',
					'slide__button',
					currentSlideIndex === arrayLength - 1 ? 'disabled' : '',
				])}
				onClick={() => slideButtonController('right')}
				data-testid="right"
				role="button"
				aria-disabled={currentSlideIndex === arrayLength - 1}
			/>
			<div className="slide__icons">
				{[...Array(arrayLength)].map((item, index) => (
					<div
						className={clsx(['slide__icon', index === currentSlideIndex ? 'active' : ''])}
						key={index}
						onClick={() => setCurrentSlideIndex(index)}
						role="button"
						tabIndex={0}
						onKeyDown={() => (f) => f}
					/>
				))}
			</div>
		</>
	);
};

export default SlideControllers;
