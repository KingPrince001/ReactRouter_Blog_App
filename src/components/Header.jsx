import { Link } from "react-router-dom";
const Header=() =>{
    return (
        <div className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/" className="link" >Home</Link></li>
                    <li><Link to="/blogs" className="link">Blogs</Link></li>
                    <li> <Link to="/about" className="link">About</Link></li> 
                </ul>
            </nav>
        </div>
    )
}

export default Header;