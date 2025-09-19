import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav id="Navigation" className="d-flex bg-dark text-gold-light m-2">
      <Link to="/">
        <img src="/assets/images/dunenovel.jpg" alt="Dune Novel Cover" />
      </Link>
      <ul className="d-flex">
        <li>
          <a href="#trailer">Trailers</a>
        </li>
        <li>
          <a href="#Latest-news">News</a>
        </li>
        <li>
          <Link to="/novels">Novels</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/books">Buy Books</Link>
        </li>
        <li>
          <a href="#Sign-up">Subscribe</a>
        </li>
      </ul>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <button className="btn" id="nav-btn">
        <i className="fas fa-bars fa-2x text-gold-mid"></i>
      </button>
    </nav>
  );
};

export default Navigation;
