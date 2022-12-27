import "./Navbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ShiDa-eCommerce
        </a>
        <div className="d-flex" role="search">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
