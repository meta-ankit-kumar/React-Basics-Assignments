import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { Message } from "../message";
import { TaskDetails } from "../taskDetails/taskDetails.component";
import { TodoForm } from "../todoForm";
import './chapter10.css';
import { v4 as uuidv4 } from 'uuid';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Filter } from "../filter/filter.component";

export const Chapter10 = () => {
	const [todoData, setTodoData] = useState([{
		id: 1,
		name: 'Task name',
		priority: 'Medium',
		dueDate: '2023-01-26',
		isCompleted: true
	}, {
		id: 2,
		name: 'Task name 2',
		priority: 'High',
		dueDate: '2023-01-26',
		isCompleted: false
	}, {
		id: 3,
		name: 'Task name 3',
		priority: 'Low',
		dueDate: '2023-01-26',
		isCompleted: false
	},{
		id: 4,
		name: 'Task name 4',
		priority: 'Low',
		dueDate: '',
		isCompleted: false
	}]);
	const [filteredTodo, setFilteredTodo] = useState(todoData);
	const [message, setMessage] = useState('');
	const [filterByCompletedTasks, setFilterByCompletedTasks] = useState(false);
	const [filterByActiveTasks, setFilterByActiveTasks] = useState(false);

	useEffect(() => {
		console.log('useEffect', filteredTodo);
		if (!filterByActiveTasks && !filterByCompletedTasks)  {
			setFilteredTodo(todoData);
			return;
		}
		const todoListFilteredByCompletionStatus = todoData.filter(todoInfo => todoInfo.isCompleted === filterByCompletedTasks);
		console.log('todoListFilteredByCompletionStatus', todoListFilteredByCompletionStatus);
		const todoListFilteredByActiveStatus = todoListFilteredByCompletionStatus.filter(todoInfo => !filterByActiveTasks || !todoInfo.dueDate || new Date(todoInfo.dueDate) >= new Date());
		console.log('todoListFilteredByActiveStatus', todoListFilteredByActiveStatus);
		setFilteredTodo(todoListFilteredByActiveStatus);
	}, [todoData, filterByActiveTasks, filterByCompletedTasks])
	const addNewTodo = (newTodoData) => {
		newTodoData.id = uuidv4();
		newTodoData.isCompleted = false;
		setTodoData([...todoData, newTodoData]);
		setMessage('Task created successfully');
	}

	console.log('filterByCompletedTasks', filterByCompletedTasks);
	console.log('filterByActiveTasks', filterByActiveTasks);

	const handleAction = (actionName, actionParameter) => {
		console.log('HandleAction called', actionName, actionParameter);
		switch (actionName) {
			case 'COMPLETE':
				const updatedTodoDetails = todoData.map(todoInfo => {
					if (todoInfo.id === actionParameter)
						todoInfo.isCompleted = true;
					return todoInfo;
				})
				setTodoData(updatedTodoDetails);
				break;
			case 'DELETE':
				setTodoData(todoData.filter(todoInfo => todoInfo.id !== actionParameter));
				break;
			case 'FILTER_BY_COMPLETION_STATUS':
				setFilterByCompletedTasks(actionParameter);

				break;
			case 'FILTER_BY_ACTIVE_STATUS':
				setFilterByActiveTasks(actionParameter);
				// setTodoData(todoData.filter(todoInfo => !todoInfo.isCompleted && todoInfo.dueDate && todoInfo.dueDate < new Date()));
				break;
			default:
				break;
		}
	}

	const renderMessage = () => {
		if (message.length) return (<Message info={message} setMessage={setMessage} />);
	}
	return (
		<div className="main-page">
			<div className="header">
				<div>
					<p className="task-heading">My Tasks</p>
					<p className="task-count">{todoData && todoData.length} tasks</p>
				</div>
				<div>
					<Link to='/React-Basics-Assignments/todo-app/'>Task Lists</Link>
				</div>
				<div className="add-new-task">
					<Link to='new'><AddBoxIcon fontSize="large" /></Link>
				</div>
			</div>
			<hr className="task-head-separator" />
			{renderMessage()}
			<Routes>
				<Route path="/">
					<Route index element={<TodoList todoListInfo={filteredTodo} handleAction={handleAction} filterByActiveTasks={filterByActiveTasks} filterByCompletedTasks={filterByCompletedTasks}/>} />
					<Route path="lists" element={<div>List of todos</div>} />
					<Route path="new" element={<TodoForm addNewTodo={addNewTodo} />} />
				</Route>
			</Routes>
		</div>
	)
}

const TodoList = ({ todoListInfo, handleAction, filterByCompletedTasks, filterByActiveTasks }) => {
	const todoListDetails = (todoListInfo) => {
		return todoListInfo.map((todoInfo => {
			return (
				<TaskDetails
					key={todoInfo.id}
					id={todoInfo.id}
					name={todoInfo.name}
					dueDate={todoInfo.dueDate}
					isCompleted={todoInfo.isCompleted}
					priority={todoInfo.priority}
					handleAction={handleAction}
				/>
			)
		}))
	}
	return (
		<>
			<Filter handleAction={handleAction} filterByCompletedTasks={filterByCompletedTasks}
					filterByActiveTasks={filterByActiveTasks}/>
			{todoListDetails(todoListInfo)}
		</>
	)
}