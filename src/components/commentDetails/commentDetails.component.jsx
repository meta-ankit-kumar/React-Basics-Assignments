import Comment from '@mui/icons-material/ModeComment';
import './commentDetails.css';

export const CommentDetails = ({ title, description }) => {
	if (!title || !description) return (<div>Click on any comment.</div>)
	return (
		<div className='comment-details'>
			<div className='title-bar'>
				<Comment color='success'/>
				<p>{title}</p>
			</div>
			<hr />
			<div className='description-bar'>
				<p>{description}</p>
			</div>
		</div>
	)
}