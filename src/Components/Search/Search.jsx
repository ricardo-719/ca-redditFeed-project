import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, updateInput } from '../../features/fetchSlice';
import './Search.css'

export const Search = () => {

    const dispatch = useDispatch();

    const { searchInput, subReddits } = useSelector((state) => state.fetch);

    const handleOnChange = (e) => {
        dispatch(updateInput(e.target.value));
    }

    const handleOnClick = () => {
      dispatch(fetchPosts(searchInput));
    }

    const handleSurprise = () => {
      let randomSub = subReddits[Math.floor(Math.random() * subReddits.length)];
      dispatch(fetchPosts(randomSub.data.subreddit));
    }

  return (
    <section>
      <label htmlFor="searchBar">Subreddit: </label>
      <input id="searchBar" name="searchBar" type="text" onChange={handleOnChange}/>
      <button onClick={handleOnClick} style={{marginLeft: "0.5rem"}}>Go</button>
      <button className='surpriseBtn' onClick={handleSurprise}>Surprise Me!</button>
    </section>
  )
}
export default Search