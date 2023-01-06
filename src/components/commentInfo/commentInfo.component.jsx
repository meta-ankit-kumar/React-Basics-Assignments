import Comment from '@mui/icons-material/Comment';
import './commentInfo.css';

export const CommentInfo = ({ id, title, setSelectedCommentId }) => {
	return (
		<div className='comment-info' onClick={() => setSelectedCommentId(id)}>
			<Comment />
			<p>{title}</p>
		</div>
	)
}