export type CardProps = {
	bgColor?: string;
	textColor?: string;
	cardButton?: React.ReactElement;
	cardDetails: {
		name: string;
		imageUrl: string;
	};
};
