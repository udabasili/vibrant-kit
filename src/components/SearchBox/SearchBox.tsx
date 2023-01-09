import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import { SearchProps } from './Search.types';
import './SearchBox.css';
const SearchBox = ({ placeholder }: SearchProps) => {
	return (
		<div className="search">
			<input type="search__input" placeholder={placeholder} />
			<div className="search__button">
				<BiSearchAlt />
			</div>
		</div>
	);
};

export default SearchBox;
