import { Link } from "react-router-dom";
import { FaTh, FaUsers, FaEdit, FaList, FaSearch } from 'react-icons/fa';

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/products">
                <FaTh className="me-2" /> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/categoryedit">
                <FaEdit className="me-2" /> Edit Categories
              </Link>
            </li>
          </ul>
          {/* Search Bar */}
          <form className="d-flex ms-3" style={{ position: "relative" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                borderRadius: "20px",
                borderColor: "#007bff",
                boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
                transition: "box-shadow 0.2s",
                paddingRight: "2.5rem"
              }}
            />
            <button
              className="btn btn-outline-primary"
              type="submit"
              style={{
                position: "absolute",
                right: "10px",
                borderRadius: "50%",
                boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
                width: "40px",
                height: "40px",
                padding: 0,
              }}
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
