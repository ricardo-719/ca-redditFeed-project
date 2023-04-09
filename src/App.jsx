import { useEffect, useState } from 'react'
import './App.css'
import { Post } from './Components/Post/Post.jsx';
import { Search } from './Components/Search/Search.jsx';

function App() {

  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState("");
  const [subReddit, setSubReddit] = useState('Codecademy');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

// Fetch data from reddit
  
  const fetchData = async() => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
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
    fetchData();
  }, [])

  useEffect(() => {
    if (posts) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [posts])

if (isLoading) {
  return <h2>Loading...</h2>
} else if (isError) {
  return (
    <section>
      <h2>Failed to load...</h2>
      <button onClick={fetchData}>Refresh page</button>
    </section>
  )
}
else {
  return (
    <div>
      <Search searchInput={searchInput} setsearchInput={setSearchInput} />
      <div className='posts'>
        {
          (posts != null) ? posts.map((post) => <Post key={post.data.id} post={post.data} />) : ''
        }
      </div> 
    </div>
  )
}
}

export default App
