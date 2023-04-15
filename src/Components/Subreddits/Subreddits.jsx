import './Subreddits.css'
import { useDispatch } from "react-redux"
import { fetchPosts } from "../../features/fetchSlice";

export const Subreddits = ({ sub }) => {

  const dispatch = useDispatch();

  const clickHandler = (endpoint) => {
    console.log(endpoint)
    dispatch(fetchPosts(endpoint))
  }

  return (
    <div>
      <a onClick={() => {clickHandler(sub.subreddit)}} className="subLinks">{ sub.subreddit_name_prefixed }</a>
    </div>
  )
}
export default Subreddits