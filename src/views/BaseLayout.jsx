import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout min-h-screen flex flex-col bg-blue-50">
      <header className="bg-blue-400 flex items-center justify-between px-4 py-2 shadow-md ">
        <h1>
          <Link className="text-decoration-none text-dark text-2xl font-bold " to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link className="nav-link text-dark border border-sky-100 rounded-full px-3 py-1" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark border border-sky-100 rounded-full px-3 py-1" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark border border-sky-100 rounded-full px-3 py-1" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content" className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-blue-300 text-center p-4 shadow-inner">
        <p>&copy; Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
