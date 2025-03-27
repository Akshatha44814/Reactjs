import { Outlet, Link } from "react-router-dom";
import "./layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="horizontal">
          <li className="list">
            <Link to="/">Home</Link>
          </li>
          <li className="list">
            <Link to="/hoc">HOC</Link>
          </li>
          <li className="list">
            <Link to="/context">Context</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

// The Layout component has <Outlet> and <Link> elements.

// The <Outlet> renders the current route selected.

// <Link> is used to set the URL and keep track of browsing history.

// Anytime we link to an internal path, we will use <Link> instead of <a href="">.

// The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.