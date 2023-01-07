import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <h2>EasyCode's blog</h2>
            <nav>
               <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </nav>
        </div>
    );
}
 
export default Navbar;
