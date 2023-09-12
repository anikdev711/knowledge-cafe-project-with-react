import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';



const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    
    return (
        <div className="md:w-1/3 mt-2 ml-4 pt-4">
            <h2 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;