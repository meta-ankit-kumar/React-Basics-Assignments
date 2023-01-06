import './main.css';
import { useState } from 'react';
import { PAGE_NAMES } from '../utils/constants';
import { Home } from '../home';
import { Chapter4 } from '../chapter4';
import { Chapter5 } from '../chapter5';

export const Main = () => {
	const [page, setPage] = useState(PAGE_NAMES.HOMEPAGE);
	switch (page) {
		case PAGE_NAMES.HOMEPAGE:
			return (
				<Home setPage={setPage}/>
			);
		case PAGE_NAMES.CHAPTER4:
			return (
				<Chapter4/>
			);
		case PAGE_NAMES.CHAPTER5:
			return (
				<Chapter5/>
			);
		default:
			return (
				<h1 className='heading'>React Basics Goal</h1>
			);
	}
};