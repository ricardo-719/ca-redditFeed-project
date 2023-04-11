import { useEffect, useState } from 'react'
import './Home.css'
import { Post } from '../Post/Post.jsx';
import { Search } from '../Search/Search.jsx';
import Header from '../Header/Header';

export function Home() {

  const [posts, setPosts] = useState("");
  const [subReddit, setSubReddit] = useState('popular');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

// Fetch data from reddit
  const fetchData = async(endpoint) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.reddit.com/r/${endpoint}.json`);
      if (response.ok) {
        const jsonResponse = await response.json();
        setPosts(jsonResponse.data.children);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchData(subReddit);
  }, [subReddit])

  useEffect(() => {
    if (posts) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [posts])

if (isLoading) {
  return <h2>Loading...</h2>
} 
else if (isError) {
  return (
    <section>
      <h2>Failed to load...</h2>
      <button onClick={fetchData}>Try again</button>
    </section>
  )
}
else {
  return (
    <main>
      <Header subReddit={subReddit} />
      <Search setSubReddit={setSubReddit} />
      <div className='posts'>
        {
          (posts != null) ? posts.map((post) => <Post key={post.data.id} post={post.data} />) : ''
        }
      </div> 
    </main>
  )
}
}