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
          <li className="list">
            <Link to="/memo">Memo</Link>
          </li>
          <li className="list">
            <Link to="/redux">Redux</Link>
          </li>
          <li className="list">
            <Link to="/ref">Ref</Link>
          </li>
          <li className="list">
            <Link to="/callback">Callbacks</Link>
          </li>
          <li className="list">
            <Link to="/custom">Custom</Link>
          </li>
          <li className="list">
            <Link to="/effect">Effect</Link>
          </li>
          <li className="list">
            <Link to="/props">Props</Link>
          </li>
          <li className="list">
            <Link to="/search">Search</Link>
          </li>
          <li className="list">
            <Link to="/todo">Todo</Link>
          </li>
          <li className="list">
            <Link to="/timer">Timer</Link>
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