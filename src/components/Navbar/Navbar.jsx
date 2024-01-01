import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src="https://cdn.worldvectorlogo.com/logos/maknaze.svg" alt="logo" width={100} />
        </div>
        <div className="nav_elements">
            <p>Home</p>
            <p>About</p>
            <p>Blogs</p>
            <p>Contact</p>
        </div>
        <div className="hamburger" />
    </nav>
  )
}

export default Navbar