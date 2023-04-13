import { useEffect } from 'react'
import './Home.css'
import { Post } from '../Post/Post.jsx';
import { Search } from '../Search/Search.jsx';
import Header from '../Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { getPostData } from '../../API/apiCall';

export function Home() {

  const { subReddit, posts, isLoading, isError } = useSelector((state) => state.fetch)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPostData(subReddit))
  }, [subReddit])

  const handleClick = () => {
    dispatch(getPostData(subReddit))
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  } 
  else if (isError) {
    return (
      <section>
        <h2>Failed to load...</h2>
        <button onClick={handleClick}>Try again</button>
      </section>
    )
  }
  else {
    return (
      <main>
        <Header subReddit={subReddit} />
        <Search />
        <div className='posts'>
          {
            (posts != null) ? posts.map((post) => <Post key={post.data.id} post={post.data} />) : ''
          }
        </div> 
      </main>
    )
  }
}