import './filter.css';

export const Filter = ({ filterByCompletedTasks, filterByActiveTasks, handleAction }) => {
	const handleButtonClick = (event) => {
		event.preventDefault();
		if (event.target.value === 'COMPLETED') {
			handleAction('FILTER_BY_COMPLETION_STATUS', !filterByCompletedTasks);
		}
		else if (event.target.value === 'ACTIVE') {
			handleAction('FILTER_BY_ACTIVE_STATUS', !filterByActiveTasks);
		}
		
	}
	return (
		<div className='filter-container'>
			Filter By
		<input className={filterByCompletedTasks ? 'filter-buttons set-active' : 'filter-buttons'} onClick={(event) => handleButtonClick(event)} type="button" value="COMPLETED" />
		<input className={filterByActiveTasks ? 'filter-buttons set-active' : 'filter-buttons'} onClick={(event) => handleButtonClick(event)} type="button" value="ACTIVE" />
		</div>
	)
}