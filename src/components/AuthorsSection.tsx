import React from "react";
import { Link } from "react-router-dom";

const AuthorsSection: React.FC = () => {
  return (
    <section id="author-bios" className="container">
      <h2 className="text-center text-xxl text-gold-mid">Author Biographies</h2>
      <p className="text-center text-lg mb-3">
        Learn about the masterminds behind the Dune universe.
      </p>

      <div className="authors-grid mb-2">
        <div className="author-card">
          <h3 className="text-gold text-xl">Frank Herbert</h3>
          <p>
            <strong>1920-1986</strong>
          </p>
          <p>
            Frank Herbert was an American science fiction author best known for
            the 1965 novel Dune and its five sequels. Herbert's work is known
            for its complex plots, political intrigue, and ecological themes.
          </p>
          <div className="author-achievements">
            <h4 className="text-gold-light">Key Achievements:</h4>
            <ul>
              <li>Hugo Award Winner (1966)</li>
              <li>Nebula Award Winner (1965)</li>
              <li>Science Fiction Hall of Fame Inductee</li>
            </ul>
          </div>
        </div>

        <div className="author-card">
          <h3 className="text-gold text-xl">Brian Herbert</h3>
          <p>
            <strong>1947-Present</strong>
          </p>
          <p>
            Brian Herbert is the son of Frank Herbert and has continued the Dune
            saga with Kevin J. Anderson. He has co-authored numerous Dune novels
            and maintains the legacy of his father's universe.
          </p>
          <div className="author-achievements">
            <h4 className="text-gold-light">Key Works:</h4>
            <ul>
              <li>Prelude to Dune trilogy</li>
              <li>Legends of Dune trilogy</li>
              <li>Heroes of Dune series</li>
            </ul>
          </div>
        </div>

        <div className="author-card">
          <h3 className="text-gold text-xl">Kevin J. Anderson</h3>
          <p>
            <strong>1962-Present</strong>
          </p>
          <p>
            Kevin J. Anderson is a prolific science fiction author who has
            co-written numerous Dune novels with Brian Herbert. He brings his
            expertise in science fiction to expand the Dune universe.
          </p>
          <div className="author-achievements">
            <h4 className="text-gold-light">Key Works:</h4>
            <ul>
              <li>Great Schools of Dune trilogy</li>
              <li>Caladan Trilogy</li>
              <li>Dune: House Atreides</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/authors" className="btn btn-gold">
          View All Authors
        </Link>
      </div>
    </section>
  );
};

export default AuthorsSection;
