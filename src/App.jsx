import { useEffect, useState } from 'react'
import './App.css'
import { Post } from './Components/Post/Post.jsx';
import { Search } from './Components/Search/Search.jsx';

function App() {

  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState();
  const [subReddit, setSubReddit] = useState('Codecademy');

// Fetch data from reddit
  
  const fetchData = async() => {
    try {
      console.log('hello')
      const response = await fetch(`https://www.reddit.com/r/${subReddit}.json`);
      if (response.ok) {
        const jsonResponse = await response.json();
        setPosts(jsonResponse.data.children);
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <Search searchInput={searchInput} setsearchInput={setSearchInput} />
      <div className='posts'>
        {
          (posts != null) ? posts.map((post, index) => <Post key={index} post={post.data} />) : ''
        }
      </div> 
    </div>
  )
}

export default App
