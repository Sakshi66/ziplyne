import logo from "./Ziplynelogo.webp";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero">
        <img src={logo} className="logo" alt="Ziplyne Logo" />
      </a>
    </nav>
  );
}

export default Navbar;
