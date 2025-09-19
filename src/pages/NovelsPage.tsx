import React from "react";
import { Link } from "react-router-dom";

const NovelsPage: React.FC = () => {
  return (
    <div className="novels-page">
      <div
        className="home-link-container"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="/assets/images/dunenovel.jpg"
            alt="Dune Novel Cover - Ana Sayfaya Dön"
            style={{ width: "60px", height: "auto", borderRadius: "5px" }}
          />
        </Link>
      </div>
      <section id="novels" className="container">
        <h2 className="text-center text-xxl text-gold-mid">Dune Novels</h2>
        <p className="text-center text-lg mb-3">
          Explore the complete Dune universe through Frank Herbert's original
          novels and the expanded series.
        </p>

        <div className="novels-grid mb-2">
          <div className="novel-category">
            <h3 className="text-gold text-xl">Original Dune Chronicles</h3>
            <ul className="novel-list">
              <li>
                <strong>Dune</strong> (1965) - The epic beginning of the saga
              </li>
              <li>
                <strong>Dune Messiah</strong> (1969) - The consequences of power
              </li>
              <li>
                <strong>Children of Dune</strong> (1976) - The next generation
              </li>
              <li>
                <strong>God Emperor of Dune</strong> (1981) - The golden path
              </li>
              <li>
                <strong>Heretics of Dune</strong> (1984) - The scattering begins
              </li>
              <li>
                <strong>Chapterhouse: Dune</strong> (1985) - The final chapter
              </li>
            </ul>
          </div>

          <div className="novel-category">
            <h3 className="text-gold text-xl">Prelude to Dune</h3>
            <ul className="novel-list">
              <li>
                <strong>Dune: House Atreides</strong> - The rise of House
                Atreides
              </li>
              <li>
                <strong>Dune: House Harkonnen</strong> - The fall of House
                Harkonnen
              </li>
              <li>
                <strong>Dune: House Corrino</strong> - The Emperor's story
              </li>
            </ul>
          </div>

          <div className="novel-category">
            <h3 className="text-gold text-xl">Legends of Dune</h3>
            <ul className="novel-list">
              <li>
                <strong>The Butlerian Jihad</strong> - The war against thinking
                machines
              </li>
              <li>
                <strong>The Machine Crusade</strong> - Humanity's struggle
              </li>
              <li>
                <strong>The Battle of Corrin</strong> - The final battle
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovelsPage;
