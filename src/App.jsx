
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'



function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog =>{
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) =>{
    // console.log('mark reading time', time);
    const newReadTime = readingTime + time;
    setReadingTime(newReadTime);
    // console.log('remove items', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>

      <Header></Header>
      <div className='flex max-w-6xl mx-auto'>
        <Blogs 
        handleAddToBookmarks={handleAddToBookmarks} 
        handleMarkAsRead={handleMarkAsRead}></Blogs>

        <Bookmarks 
        bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>

      </div>

    </>
  )
}

export default App
