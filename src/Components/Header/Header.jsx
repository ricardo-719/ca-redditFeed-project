import './Header.css'
import { useSelector } from 'react-redux'

export const Header = () => {

  const { subReddit } = useSelector((state) => state.fetch)

  return (
    <h2 className="homeHeader">r/{subReddit}</h2>
  )
}

export default Header