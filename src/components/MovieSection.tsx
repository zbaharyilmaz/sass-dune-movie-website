import React from "react";

const MovieSection: React.FC = () => {
  return (
    <section id="Movie" className="container">
      <div className="movie-content">
        <a href="#trailer" className="movie-logo-link">
          <img
            src="/assets/images/dunelogo.jpg"
            alt="Dune Logo"
            className="movie-logo"
          />
        </a>
      </div>
    </section>
  );
};

export default MovieSection;
