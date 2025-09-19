import React from "react";
import { Link } from "react-router-dom";

const BuyBooksSection: React.FC = () => {
  return (
    <section id="buy-books" className="container">
      <h2 className="text-center text-xxl text-gold-mid">Buy Books</h2>
      <p className="text-center text-lg mb-3">
        Purchase Dune novels and related books from your favorite retailers.
        There are also audiobooks available.
      </p>

      <div className="retailers-grid mb-2">
        <div className="retailer-card">
          <h3 className="text-gold text-xl">
            <i className="fab fa-amazon"></i> Amazon
          </h3>
          <p>
            Find all Dune novels in paperback, hardcover, and e-book formats.
            Fast shipping and competitive prices.
          </p>
          <a
            href="https://www.amazon.com/s?k=dune+frank+herbert"
            className="btn btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-shopping-cart"></i> Shop on Amazon
          </a>
        </div>

        <div className="retailer-card">
          <h3 className="text-gold text-xl">
            <i className="fas fa-book"></i> Barnes & Noble
          </h3>
          <p>
            Browse Dune books at your local Barnes & Noble store or online.
            Expert recommendations and book clubs.
          </p>
          <a
            href="https://www.barnesandnoble.com/s/dune+frank+herbert"
            className="btn btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-store"></i> Visit B&N
          </a>
        </div>

        <div className="retailer-card">
          <h3 className="text-gold text-xl">
            <i className="fas fa-headphones"></i> Audiobooks
          </h3>
          <p>
            Listen to Dune novels narrated by talented voice actors. Perfect for
            commutes and long journeys.
          </p>
          <a
            href="https://www.audible.com/search?keywords=dune+frank+herbert"
            className="btn btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-play"></i> Listen Now
          </a>
        </div>
      </div>

      <div className="text-center">
        <Link to="/books" className="btn btn-gold">
          View All Retailers
        </Link>
      </div>
    </section>
  );
};

export default BuyBooksSection;
