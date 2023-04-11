import './Header.css'

const Header = ({ subReddit }) => {


  return (
    <h2 className="homeHeader">r/{subReddit}</h2>
  )
}

export default Header