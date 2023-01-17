import "./Navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
const Navbar = () => {
  return (
    <nav className="navbar" style={{backgroundColor:"#a2d2ff"}} >
      <div className="container-fluid">
        <Link to={'/'}>
        <p className="navbar-brand mb-0 h1">
          ShiGa-eCommerce
        </p>
        </Link>
        
        <div className="d-flex" >
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
