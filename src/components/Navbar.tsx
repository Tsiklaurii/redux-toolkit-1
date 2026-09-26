import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/'}>Home</Link>
        </nav>
    )
}

export default Navbar