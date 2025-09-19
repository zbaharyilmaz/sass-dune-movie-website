import React, { useState } from "react";

const TrailerSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="trailer" className="container">
      <h2 className="text-center text-xxl text-gold-mid">Official Trailers</h2>
      <p className="text-center text-lg mb-3">
        Watch the official Dune movie trailers here!
      </p>

      <div className="trailers-grid">
        <div className="trailer-item">
          <h3 className="text-center text-gold text-xl mb-2">Dune (2021)</h3>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/8g18jFHCLXk"
              title="Dune Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="trailer-item">
          <h3 className="text-center text-gold text-xl mb-2">
            Dune: Part Two (2024)
          </h3>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Way9Dexny3w"
              title="Dune Part Two Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {showMore && (
          <>
            <div className="trailer-item">
              <h3 className="text-center text-gold text-xl mb-2">
                Dune: Part Three (2026)
              </h3>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/poWiludgQCw"
                  title="Dune Part Three Official Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="trailer-item">
              <h3 className="text-center text-gold text-xl mb-2">
                Dune: Behind the Scenes
              </h3>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/_YUzQa_1RCE"
                  title="Dune Behind the Scenes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="trailer-item">
              <h3 className="text-center text-gold text-xl mb-2">
                Dune: Special Features
              </h3>
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/Jd9L79koFkA"
                  title="Dune Special Features"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="text-center mt-4">
        <button
          onClick={toggleShowMore}
          className="btn btn-gold"
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "25px",
            border: "2px solid #D4AF37",
            background: showMore ? "transparent" : "#D4AF37",
            color: showMore ? "#D4AF37" : "#000",
            cursor: "pointer",
            marginBottom: "2rem",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#D4AF37";
            e.currentTarget.style.color = "#000";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = showMore
              ? "transparent"
              : "#D4AF37";
            e.currentTarget.style.color = showMore ? "#D4AF37" : "#000";
          }}
        >
          {showMore ? "Daha Az Göster" : "Daha Fazla Göster"}
        </button>
      </div>
    </section>
  );
};

export default TrailerSection;
