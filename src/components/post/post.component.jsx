import Article from '@mui/icons-material/Article';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import './post.css';

export const Post = ({title, description}) => {
	return (
		<div className='post-container'>
			<Article fontSize='large'/>
			<div className='post-info'>
				<strong>{title}</strong>
				<div className='post-description'>{description}</div>
			</div>
			<button><ThumbUpOutlinedIcon/></button>
		</div>
	)
};