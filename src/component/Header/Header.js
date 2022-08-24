import "./Header.css"

const Header = () => {
  return (
    <span className="header" onClick={()=> window.scroll(0,0)}>🎥 Popcorn Klub 🎬</span>
  )
}

export default Header