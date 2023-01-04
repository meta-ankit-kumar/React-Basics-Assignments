import './main.css';
import { useState } from 'react';
import { PAGE_NAMES } from '../utils/constants';
import { Home } from '../home';
import { Chapter4 } from '../chapter4';

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
			)
		default:
			return (
				<h1 className='heading'>React Basics Goal</h1>
			);
	}
};