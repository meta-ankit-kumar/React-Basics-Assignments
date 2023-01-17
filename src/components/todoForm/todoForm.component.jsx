import { Link } from 'react-router-dom';
import './todoForm.css';

export const TodoForm = ({ addNewTodo }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const  name = event.target['task-name'].value;
		const dueDate = event.target['task-due-date'].value;
		const priority = event.target['task-priority'].value;
		console.log('Submit Action');
		console.log(name, dueDate, priority);
		addNewTodo({
			name, dueDate, priority
		});
		event.target['task-name'].value = '';
		event.target['task-due-date'].value = '';
		event.target['task-priority'].value = '';
	}
	return (
		<div className='todo-container'>
			<div className="todo-form">
			<h4>Create a new todo</h4>
			<form onSubmit={handleSubmit}>
				<div className='text-field'>
					<input type="text" name="task-name" id="task-name" required/>
					<label htmlFor="task-name">Task Name</label>
					<input type="date" name="task-due-date" id="task-due-date" />
					<label htmlFor="task-due-date">Task Due Date</label>
				</div>
				<p className='priority'>Priority</p>
				<div className='task-priority'>
					<input type="radio" value="low" name="task-priority" id="task-priority-low" required/>
					<label htmlFor="task-priority-low">Low</label>
					<input type="radio" value="medium" name="task-priority" id="task-priority-medium" required/>
					<label htmlFor="task-priority-medium">Medium</label>
					<input type="radio" value="high" name="task-priority" id="task-priority-high" required/>
					<label htmlFor="task-priority-high">High</label>
				</div>
				<input type="submit" value="Create Task" />
			</form>
		</div>
		</div>
	);
};