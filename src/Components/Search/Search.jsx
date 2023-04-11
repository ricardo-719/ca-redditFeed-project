import { useState } from 'react';

export const Search = (props) => {

    const { setSubReddit } = props

    const [searchInput, setSearchInput] = useState("");

    const handleOnChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleOnClick = () => {
      console.log(searchInput)
      setSubReddit(searchInput);
    }

  return (
    <section>
      <label htmlFor="searchBar">Search:</label>
      <input id="searchBar" name="searchBar" type="text" onChange={handleOnChange}/>
      <button onClick={handleOnClick} >Search</button>
    </section>
  )
}
export default Search