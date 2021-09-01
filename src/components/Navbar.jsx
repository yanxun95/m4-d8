import netflixLogo from "./img/Netflix_Logo_RGB.png";
import avatar from "./img/avatar.png";
import "../style/style.css";

const Navbar = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.356)" }}
    >
      <a className="navbar-brand" href="index.html">
        <img src={netflixLogo} alt="Netflix Logo" height="40px" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="backOffice.html">
              Back Office
            </a>
          </li>
        </ul>

        <a href="#" style={{ color: "grey" }} className="px-2">
          <i className="fa fa-search"></i>
        </a>
        <a
          className="active"
          style={{ color: "grey", textDecoration: "none" }}
          className="px-2"
          href="index4.html"
        >
          Kids
        </a>

        <a href="#" style={{ color: "white" }} className="px-2">
          <i className="fa fa-bell"></i>
        </a>
      </div>
      <div className="dropdown" style={{ color: "white" }}>
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-circle"
            className="px-2"
            width="40"
            height="30"
          />
        </button>

        <div
          className="dropdown-menu px-2"
          style={{ opacity: "0.8" }}
          aria-labelledby="dropdownMenuButton"
        >
          <a className="dropdown-item" href="indexaccount.html">
            Account Settings
          </a>
          <a className="dropdown-item" href="#">
            Help
          </a>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
