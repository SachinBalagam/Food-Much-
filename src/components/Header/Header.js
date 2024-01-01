import "./index.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
        alt="Website Logo"
        className="logo"
      />
      <ul className="list-container">
        <li className="nav">Home</li>
        <li className="nav">Menu</li>
        <li className="nav">Cart</li>
        <li className="nav">Contact Us</li>
        <li className="nav">
          <button>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
