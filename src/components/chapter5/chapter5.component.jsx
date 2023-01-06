import { CommentBox } from '../commentBox';
import { COMMENTS_DATA } from '../utils/constants';
import './chapter5.css';

export const Chapter5 = () => {
	return (
		<div>
			<CommentBox comments={COMMENTS_DATA}/>
		</div>
	  );
};
