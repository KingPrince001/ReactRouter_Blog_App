import { Link } from "react-router-dom";
 import {FaHome} from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
const Header=() =>{
    return (
        <div className="header">
            <nav>
                <ul className="nav-links">
                    <li><Link to="/" className="link"><FaHome/>Home</Link></li>
                    <li><Link to="/javascript" className="link">JavaScript</Link></li>
                    <li> <Link to="/java" className="link">Java</Link></li>
                    <li> <Link to="/python" className="link">Python</Link></li>
                    <li> <Link to="/cplusplus" className="link">C++</Link></li>
                    <li> <Link to="/about" className="link">< FaCoffee/>About</Link></li> 
                </ul>
            </nav>
        </div>
    )
}

export default Header;