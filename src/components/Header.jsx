import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}
      >
        <img style={{
          width: '50px'
        }} src="/logo.png" alt="" />
        <span className="fs-4">Currency Exchanger</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/exchange"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            aria-current="page"
          >
            Currency Exchange
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
