import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';



const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks);
    
    return (
        <div className="md:w-1/3 mt-2 ml-4 pt-4">
            <h3 className="text-center text-3xl">Spent time on read : {readingTime}</h3>
            <h2 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id} 
                    bookmark={bookmark}
                    readingTime={readingTime}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;