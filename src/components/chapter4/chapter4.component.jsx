import { Post } from '../post';
import { POST_DATA } from '../utils/constants';
import './chapter4.css';

export const Chapter4 = () => {
	return (
		<div className='main'>
			<h3>Blog Posts</h3>
			<div className='posts-container'>
				{POST_DATA.map(postInfo => {
				return (
					<Post title={postInfo.title} description={postInfo.description}/>
				)
				})}			
			</div>
		</div>
	  );
};
