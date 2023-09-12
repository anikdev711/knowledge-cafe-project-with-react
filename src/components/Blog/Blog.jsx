import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    // console.log(blog);
    const {id, cover, author, author_img, hashtags, posted_date, reading_time, title } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <div>
                        <img className='w-14' src={author_img} alt="" />
                    </div>
                    <div className='ml-6'>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash} </a></span>)
            }
            </p>

            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold'>Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;