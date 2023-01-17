import './taskDetails.css';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

const getClassAsPerCompletionStatus = (isCompleted) => {
	if (isCompleted) return 'task-name completed';
	return 'task-name';
}

export const TaskDetails = ({
	id, name, dueDate, priority, isCompleted, handleAction
}) => {
	const [expandTaskDetails, setExpandTaskDetails] = useState(false);
	return (
		<div className='task-details-container' onMouseEnter={() => setExpandTaskDetails(true)} onMouseLeave={() => setExpandTaskDetails(false)}>
			<div className='task-content'>
				<p className={getClassAsPerCompletionStatus(isCompleted)}>{name}</p>
				<p className='task-due-date'>{dueDate && dueDate.length ? dueDate : 'No due date'}</p>
				<p className={ expandTaskDetails ? 'show' : 'hide'}>Priority: {priority.toUpperCase()}</p>
			</div>
			<div className={ isCompleted ? 'hide' : 'show'}>
			<CheckIcon onClick={() => handleAction('COMPLETE', id)} fontSize='large' />
			<CancelIcon onClick={() => handleAction('DELETE', id)} fontSize='large' />
			</div>
			<div className={ isCompleted ? 'show' : 'hide'}>
				<VerifiedIcon fontSize='large' />
			</div>
		</div>
	)
}