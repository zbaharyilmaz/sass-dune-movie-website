import React from "react";

const LatestNewsSection: React.FC = () => {
  return (
    <section id="Latest-news" className="container">
      <h2 className="text-center text-xxl text-gold-mid">Latest News</h2>

      <div className="news-article">
        <h3 className="text-gold text-xl">
          DUNE: HOUSE ATREIDES Monthly Comic Issues #1–8
        </h3>
        <p className="text-lg">
          Issue #6 (of 12) of the BOOM! Studios adaptation of Brian and Kevin's
          Dune: House Atreides was just released. The covers are gorgeous and
          showcase a variety of talent. Below are the covers for the first eight
          issues. You can find them, and maybe some of the special variant
          covers, at your local comic book store.
        </p>

        <div className="news-link">
          <a
            href="http://www.comicshoplocator.com"
            className="text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>{" "}
            http://www.comicshoplocator.com
          </a>
        </div>

        <div className="news-image">
          <img src="/assets/images/dunecover.jpg" alt="Dune Comic Cover" />
        </div>

        <div className="news-action">
          <a
            href="http://www.comicshoplocator.com"
            className="btn btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-book-open"></i> Comic Shop Locator
          </a>
        </div>
      </div>

      <div className="news-article">
        <h3 className="text-gold text-xl">Lady of Caladan Cover Reveal</h3>
        <p className="text-lg">
          We're pleased to share the new cover for THE LADY OF CALADAN,
          excellent work by Matt Griffin, who also did the cover for THE DUKE OF
          CALADAN. Brian and Kevin have turned in the 8th and final production
          draft of the manuscript, and Tor Books will release the book on
          September 21.
        </p>

        <div className="news-image">
          <img
            src="/assets/images/caladancover.jpeg"
            alt="Lady of Caladan Cover"
          />
        </div>

        <div className="news-action">
          <a
            href="https://www.amazon.com/Lady-Caladan-Brian-Herbert/dp/1250768464"
            className="btn btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-amazon"></i> Preorder on Amazon
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
