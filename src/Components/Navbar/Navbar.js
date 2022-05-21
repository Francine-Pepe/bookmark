import "./Navbar.css";
import Bookmark from "./../images/logo-bookmark.svg";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <>
      <nav className="navbar_container">
        
        <a href="#home">
          <img src={Bookmark} alt="logo" />
        </a>
        <div className="navbar">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Contact</a>
          <a href="/">
            <button>Login</button>
          </a>
        </div>
        <div className="nav_mobile">
          <NavbarMobile />
        </div>
      </nav>
    </>
  );
}
