import { Link } from "react-router-dom";
const Header=() =>{
    return (
        <div className="header">
            <nav>
                <ul>
                    <Link to="/" className="link" >Home</Link>
                    <Link to="/blogs" className="link">Blogs</Link>
                    <Link to="/about" className="link">About</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;