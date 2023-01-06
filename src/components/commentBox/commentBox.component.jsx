import { useEffect, useState } from 'react';
import { CommentDetails } from '../commentDetails';
import { CommentInfo } from '../commentInfo/commentInfo.component';
import { COMMENTS_DATA } from '../utils/constants';
import './commentBox.css';

export const CommentBox = () => {
	const [comments, setComments] = useState(COMMENTS_DATA);
	console.log('commments', comments);
	const [selectedComment, setSelectedComment] = useState('');
	const setCommentDataAsPerSelection = (selectedCommentId) => {
		if (!selectedCommentId) return;
		const selectedComment = comments.find(commentInfo => commentInfo.id === selectedCommentId);
		selectedComment.isSelected = true;
		setSelectedComment(selectedComment);
		setComments(comments);
	}
	return (
		<div className="comment-box">
			<div className="comment-box-heading">Comment Box</div>
			<div className="comment-container">
				<div className="comment-section-left-side">
					{comments.map(commentInfo => {
						return (
							<CommentInfo key={commentInfo.id} title={commentInfo.title} id={commentInfo.id} setSelectedCommentId={setCommentDataAsPerSelection} />
						)
					})}
				</div>
				<div className="comment-section-right-side">
					<CommentDetails title={selectedComment?.title} description={selectedComment?.description} />
				</div>
			</div>
		</div>
	);
};