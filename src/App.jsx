import { useState } from 'react'
import './App.css'
import { Post } from './Components/Post/Post.jsx';
import { Search } from './Components/Search/Search.jsx';

function App() {
  const [changeInput, setChangeInput] = useState("")
  console.log(changeInput)
  return (
    <div>
      <Search changeInput={changeInput} setChangeInput={setChangeInput} />
      <Post />
    </div>
  )
}

export default App
