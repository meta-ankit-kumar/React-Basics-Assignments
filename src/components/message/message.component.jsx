import CancelIcon from '@mui/icons-material/Cancel';
import './message.css';

export const Message = ({ info, setMessage }) => {
	return (
		<div className='message-container'>
			<div>{info}</div>
			<CancelIcon onClick={() => setMessage('')}/>
		</div>
	);
};
