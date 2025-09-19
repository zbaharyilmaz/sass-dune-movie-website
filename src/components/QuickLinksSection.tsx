import React from "react";
import { Link } from "react-router-dom";

const QuickLinksSection: React.FC = () => {
  return (
    <section id="quick-links" className="container">
      <h2 className="text-center text-xxl text-gold-mid">
        Explore the Dune Universe
      </h2>
      <p className="text-center text-lg mb-3">
        Discover the complete Dune saga through novels, authors, and more.
      </p>

      <div className="quick-links-grid">
        <div className="quick-link-card">
          <h3 className="text-gold text-xl">
            <i className="fas fa-book"></i> Novels
          </h3>
          <p>
            Explore the complete Dune universe through Frank Herbert's original
            novels and the expanded series.
          </p>
          <Link to="/novels" className="btn btn-gold">
            <i className="fas fa-arrow-right"></i> View All Novels
          </Link>
        </div>

        <div className="quick-link-card">
          <h3 className="text-gold text-xl">
            <i className="fas fa-user"></i> Authors
          </h3>
          <p>
            Learn about Frank Herbert, Brian Herbert, and Kevin J. Anderson -
            the masterminds behind Dune.
          </p>
          <Link to="/authors" className="btn btn-gold">
            <i className="fas fa-arrow-right"></i> Meet the Authors
          </Link>
        </div>

        <div className="quick-link-card">
          <h3 className="text-gold text-xl">
            <i className="fas fa-shopping-cart"></i> Buy Books
          </h3>
          <p>
            Purchase Dune novels and related books from your favorite retailers.
            There are also audiobooks available.
          </p>
          <Link to="/books" className="btn btn-gold">
            <i className="fas fa-arrow-right"></i> Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
