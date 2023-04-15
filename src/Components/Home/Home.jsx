import { useEffect } from 'react'
import './Home.css'
import { Post } from '../Post/Post.jsx';
import { Subreddits } from '../Subreddits/Subreddits';
import { Search } from '../Search/Search.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getPostData, getSubredditsData } from '../../API/apiCall';

export function Home() {

  const { subReddit, posts, subReddits, isLoading, isError, subIsLoading, subIsError } = useSelector((state) => state.fetch)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPostData(subReddit))
  }, [subReddit])

  useEffect(() => {
    dispatch(getSubredditsData())
  }, [])

  const handleClick = () => {
    dispatch(getPostData(subReddit))
  }

  console.log(subReddits)

  if (isLoading || subIsLoading) {
    return <h2>Loading...</h2>
  } 
  else if (isError || subIsError) {
    return (
      <section>
        <h2>Failed to load...</h2>
        <button onClick={handleClick}>Try again</button>
      </section>
    )
  }
  else {
    return (
      <div className='homeComponent'>
        <section className='postSection'>
          <Search />
          <div className='posts'>
            {
              (posts != null) ? posts.map((post) => <Post key={post.data.id} post={post.data} />) : ''
            }
          </div> 
        </section>
        <aside>
          <h3>Interesting Subs</h3>
          {
            (subReddits != null) ? subReddits.map((sub) => <Subreddits key={sub.data.id} sub={sub.data} />) : ''
          }
        </aside>
      </div>
      
    )
  }
}