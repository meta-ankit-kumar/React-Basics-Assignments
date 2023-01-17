import { PAGE_NAMES } from '../utils/constants';
import './home.css';

export const Home = ({ setPage }) => {
	return (
		<>
			<h1 className='heading'>React Basics Goal</h1>
			<button onClick={() => setPage(PAGE_NAMES.CHAPTER4)}>Chapter4</button>
			<br></br>
			<button onClick={() => setPage(PAGE_NAMES.CHAPTER5)}>Chapter5</button>
			<br></br>
			<button onClick={() => setPage(PAGE_NAMES.CHAPTER6)}>Chapter6</button>
			<br></br>
			<button onClick={() => setPage(PAGE_NAMES.CHAPTER10)}>Chapter10</button>
		</>
	);
};