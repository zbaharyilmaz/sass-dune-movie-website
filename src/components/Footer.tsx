import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="text-gold">Dune Universe</h3>
            <p>
              Explore the epic science fiction saga created by Frank Herbert and
              continued by Brian Herbert and Kevin J. Anderson.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="text-gold">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#novels">Novels</a>
              </li>
              <li>
                <a href="#author-bios">Authors</a>
              </li>
              <li>
                <a href="#buy-books">Buy Books</a>
              </li>
              <li>
                <a href="#Latest-news">News</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-gold">Connect</h3>
            <div className="social-links-footer">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="https://twitter.com/DuneMovie"
                className="social-link-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="https://facebook.com/DuneMovie"
                className="social-link-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="https://instagram.com/dunemovie"
                className="social-link-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="https://youtube.com/c/DuneMovie"
                className="social-link-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Dune Movie Website. All rights reserved. | Based on the
            works of Frank Herbert
          </p>
          <p>
            This is a fan-made website and is not affiliated with Warner Bros.
            or Legendary Pictures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
