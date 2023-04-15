import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, updateInput } from '../../features/fetchSlice';

export const Search = () => {

    const dispatch = useDispatch()

    const { searchInput } = useSelector((state) => state.fetch)

    const handleOnChange = (e) => {
        dispatch(updateInput(e.target.value));
    }

    const handleOnClick = () => {
      dispatch(fetchPosts(searchInput));
    }

  return (
    <section>
      <label htmlFor="searchBar">Subreddit: </label>
      <input id="searchBar" name="searchBar" type="text" onChange={handleOnChange}/>
      <button onClick={handleOnClick} style={{marginLeft: "0.5rem"}}>Go</button>
    </section>
  )
}
export default Search