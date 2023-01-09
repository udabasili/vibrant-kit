import clsx from 'clsx';
import React from 'react';

import { CardProps } from './Card.type';
import './Card.css';

const Card = (props: CardProps) => {
	const { bgColor, textColor = 'white', cardButton, cardDetails } = props;

	return (
		<div
			className={clsx(['card'])}
			style={{
				backgroundColor: bgColor,
				color: textColor,
			}}
		>
			<img
				src={`${
					cardDetails?.imageUrl ? cardDetails.imageUrl : 'https://icons8.com/icon/1G2BW7-tQJJJ/no-image'
				}`}
				width={300}
				height={300}
				alt={`${cardDetails?.name ? cardDetails.name : 'Default Text'}`}
				className="card__image"
			/>
			<span className="card__text">{`${cardDetails?.name ? cardDetails.name : 'Default Text'}`}</span>
			{cardButton ? cardButton : null}
		</div>
	);
};

export default Card;
